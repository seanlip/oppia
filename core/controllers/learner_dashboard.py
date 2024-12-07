# Copyright 2022 The Oppia Authors. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.



from __future__ import annotations

import logging

from core.controllers import base
from core.domain import learner_progress_services
from core.domain import suggestion_services
from core.domain import user_services

class LearnerDashboardPage(base.BaseHandler):
    """It handles for the learner dashboard page."""

    @base.require_user
    def get(self):
        """Handles GET requests."""
        self.render_template('learner-dashboard-page.mainpage.html')


class LearnerDashboardDataHandler(base.BaseHandler):
    """It provides data for the learner dashboard."""

    @base.require_user
    def get(self):
        """Handles GET requests."""
        user_id = self.user_id
        user_settings = user_services.get_user_settings(user_id)

        if not user_settings:
            raise self.InvalidInputException('User settings not found.')

        learner_progress = learner_progress_services.get_learner_dashboard_data(user_id)

        # Fetch suggestions for the user.
        try:
            suggestions = suggestion_services.get_suggestions_by_user(user_id)
            valid_suggestions = []
            for suggestion in suggestions:
                if suggestion is None:
                    logging.warning(
                        'Missing suggestion for user_id: %s', user_id)
                    continue
                valid_suggestions.append(suggestion)

            learner_progress['suggestions'] = valid_suggestions

        except Exception as e:
            logging.error(
                'Error retrieving suggestions for user_id %s: %s', user_id, e)
            learner_progress['suggestions'] = []

        self.render_json(learner_progress)
