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

"""Tests for automatic voiecover regenration service methods."""


from __future__ import annotations

import json
import os

from core import feature_flag_list
from core import feconf
from core import schema_utils
from core import utils
from core.domain import exp_domain
from core.domain import exp_fetchers
from core.domain import exp_services
from core.domain import feature_flag_services
from core.domain import state_domain
from core.domain import user_services
from core.domain import voiceover_domain
from core.domain import voiceover_services
from core.platform import models
from core.tests import test_utils

from typing import Dict

MYPY = False
if MYPY: # pragma: no cover
    from mypy_imports import voiceover_models

(voiceover_models,) = models.Registry.import_models([
    models.Names.VOICEOVER])


class AutomaticVoiceoverRegenerationTests(test_utils.GenericTestBase):
    def test_should_able_to_convert_oppia_tags_to_generic_html_tags(self) -> None:
        pass

    def test_should_be_able_to_parse_html_correctly(self) -> None:
        pass

    def test_should_be_able_to_regenerate_automatic_voiceovers(self) -> None:
        pass
