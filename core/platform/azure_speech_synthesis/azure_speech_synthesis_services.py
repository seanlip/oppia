# coding: utf-8
#
# Copyright 2024 The Oppia Authors. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS-IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Services for handling speech synthesis using Azure API calls.
Documentation link: https://learn.microsoft.com/en-us/azure/ai-services/
speech-service/index-text-to-speech.
"""

from __future__ import annotations

from core import feconf
from core.platform import models

import azure.cognitiveservices.speech as speechsdk
from typing import Dict, List, Optional, Tuple, Union

MYPY = False
if MYPY: # pragma: no cover
    from mypy_imports import secrets_services

secrets_services = models.Registry.import_secrets_services()


class WordBoundaryCollection:
    """This class handles word boundary events to collect the time offsets
    for each word and punctuation from Azure-generated speech synthesis.
    """

    def __init__(self):
        self.word_to_audio_offset = []

    def word_boundary_event(self, event: speechsdk.SessionEventArgs) -> None:
        """Handles the word boundary events during speech synthesis.

        Args:
            event: SessionEventArgs. The event containing the time offset
                (in milliseconds) for each token (word or punctuation) in
                the synthesized speech.
        """
        audio_offset_record = {
            'token': '',
            'audio_offset_msec': 0.0
        }

        audio_offset_record['token'] = event.text
        audio_offset_record['audio_offset_msec'] = event.audio_offset / 10000

        self.word_to_audio_offset.append(audio_offset_record)


def regenerate_speech_from_text(
    ssml_text_for_speech_synthesis: str
) -> Tuple[bytes, List[Dict[str, Union[str, float]]], Optional[str]]:
    """Regenerates speech (Oppia's voiceovers) from the provided SSML text.

    This method uses Azure Text-to-Speech to synthesize speech from the input
    SSML (Speech Synthesis Markup Language) text. The generated speech is
    returned as binary audio data along with tokenized word boundary details.

    Args:
        ssml_text_for_speech_synthesis: str. The SSML text used for speech
            synthesis. The input should be in SSML format. For more details on
            SSML, refer to: https://learn.microsoft.com/en-us/azure/ai-services
            /speech-service/speech-synthesis-markup.

    Returns:
        tuple. A tuple containing three elements:
            - bytes. The synthesized speech in MP3 format.
            - list(dict): A list of dictionaries where each entry contains
            (a). `token` (str) A token from the provided text (either a word or
            punctuation). (b). `audio_offset_msec` (float): The time offset
            in milliseconds for the token in the synthesized speech.
            - str|None: A string describing any error encountered during
            speech synthesis. None, if synthesis is successful.
    """

    # Azure text-to-speech API key.
    azure_tts_api_key = secrets_services.get_secret('AZURE_TTS_API_KEY')

    # Azure text-to-speech resource region.
    azure_tts_region = feconf.AZURE_TEXT_TO_SPEECH_REGION

    # Speech Configuration for Azure TTS.
    speech_config = speechsdk.SpeechConfig(
        subscription=azure_tts_api_key,
        region=azure_tts_region)

    # Configuring audio format to MP3.
    speech_config.set_speech_synthesis_output_format(
        speechsdk.SpeechSynthesisOutputFormat.Audio24Khz160KBitRateMonoMp3)

    speech_synthesizer = speechsdk.SpeechSynthesizer(
        speech_config=speech_config, audio_config=None)

    word_boundary_collection_instance = WordBoundaryCollection()
    speech_synthesizer.synthesis_word_boundary.connect(
        word_boundary_collection_instance.word_boundary_event)

    speech_synthesis_result = speech_synthesizer.speak_ssml_async(
        ssml_text_for_speech_synthesis).get()

    binary_audio_data = speech_synthesis_result.audio_data

    error_details = None
    if speech_synthesis_result.reason == speechsdk.ResultReason.Canceled:
        cancellation_details = speech_synthesis_result.cancellation_details

        if cancellation_details.reason == speechsdk.CancellationReason.Error:
            error_details = cancellation_details.error_details

    return (
        binary_audio_data,
        word_boundary_collection_instance.word_to_audio_offset,
        error_details
    )
