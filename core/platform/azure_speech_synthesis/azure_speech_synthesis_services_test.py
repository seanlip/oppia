# coding: utf-8
#
# Copyright 2014 The Oppia Authors. All Rights Reserved.
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

"""Tests for the Mailgun API wrapper."""

from __future__ import annotations

import urllib

from core import feconf
from core import utils
from core.platform import models
from core.platform.azure_speech_synthesis import azure_speech_synthesis_services
from core.tests import test_utils

from typing import Dict, Tuple

secrets_services = models.Registry.import_secrets_services()

class AzureSpeechSynthesisTests(test_utils.GenericTestBase):
    """Tests for synthesizing speech using Azure service."""

    def setUp(self) -> None:
        super().setUp()
        self.swapped_request = lambda *args: args
        self.swap_api_key_secrets_return_none = self.swap_to_always_return(
            secrets_services, 'get_secret', None)
        self.swap_api_key_secrets_return_secret = self.swap_with_checks(
            secrets_services,
            'get_secret',
            lambda _: 'key',
            expected_args=[
                ('MAILGUN_API_KEY',),
            ]
        )
    def test_speech_synthesis_from_azure(self):
        ssml_text = """
            <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
                <voice name="en-US-EmmaNeural">
                    <s>Who are you?</s>
                </voice>
            </speak>
        """
        binary_data, word_audio_offset, error_details = (
            azure_speech_synthesis_services.regenerate_speech_from_text(
                ssml_text))
        print(binary_data)

