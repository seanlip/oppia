# coding: utf-8
#
# Copyright 2023 The Oppia Authors. All Rights Reserved.
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

"""Unit tests for scripts/install_dependencies_json_packages.py."""

from __future__ import annotations

import datetime
import unittest.mock

from scripts import inactive_issue_checker

MockGithubException = unittest.mock.Mock()
MockGithubException.__name__ = 'GithubException'


class TestCheckInactiveIssues(unittest.TestCase):
    """Test suite for the check_inactive_issues function."""

    def setUp(self) -> None:
        """Set up test cases."""
        self.patcher = unittest.mock.patch(
        'scripts.inactive_issue_checker.Github')
        self.MockGithub = self.patcher.start()
        self.mock_github = self.MockGithub.return_value
        self.mock_repo = self.mock_github.get_repo.return_value
        self.current_time = datetime.datetime.now(datetime.timezone.utc)

    def tearDown(self) -> None:
        """Tear down test cases."""
        self.patcher.stop()

    def test1(self) -> None:
        """Test that inactive issues are unassigned correctly."""
        mock_issue = unittest.mock.MagicMock()
        self.mock_repo.get_issues.return_value = [mock_issue]
        mock_issue.number = 1
        mock_issue.assignee = unittest.mock.MagicMock()
        mock_issue.assignee.login = 'user123'
        mock_event = unittest.mock.MagicMock()
        mock_event.created_at = self.current_time - datetime.timedelta(days=10)
        mock_event.event = 'assigned'
        mock_issue.get_events.return_value = [mock_event]
        self.mock_repo.get_collaborators.return_value = []
        self.mock_repo.get_pulls.return_value = []

        inactive_issue_checker.inactive_issue_checker(
            'mock_token', 'mock_owner', 'mock_repo')

        mock_issue.remove_from_assignees.assert_called_once_with('user123')
        mock_issue.create_comment.assert_called_once_with(
            '@user123 has been unassigned from this issue due to inactivity '
            'for more than 7 days. If you would like '
            'to continue working on this issue, '
            'please request to be reassigned.'
        )

    def test2(self) -> None:
        """Test that active issues are not unassigned."""
        mock_issue = unittest.mock.MagicMock()
        self.mock_repo.get_issues.return_value = [mock_issue]
        mock_issue.number = 2
        mock_issue.assignee = unittest.mock.MagicMock()
        mock_issue.assignee.login = 'user456'
        mock_event = unittest.mock.MagicMock()
        mock_event.created_at = self.current_time - datetime.timedelta(days=5)
        mock_event.event = 'assigned'
        mock_issue.get_events.return_value = [mock_event]

        inactive_issue_checker.inactive_issue_checker(
            'mock_token', 'mock_owner', 'mock_repo')

        mock_issue.remove_from_assignees.assert_not_called()
        mock_issue.create_comment.assert_not_called()

    def test3(self) -> None:
        """Test that issues with related open PRs are not unassigned."""
        mock_issue = unittest.mock.MagicMock()
        self.mock_repo.get_issues.return_value = [mock_issue]
        mock_issue.number = 3
        mock_issue.assignee = unittest.mock.MagicMock()
        mock_issue.assignee.login = 'user789'
        mock_event = unittest.mock.MagicMock()
        mock_event.created_at = self.current_time - datetime.timedelta(days=10)
        mock_event.event = 'assigned'
        mock_issue.get_events.return_value = [mock_event]
        self.mock_repo.get_pulls.return_value = [
            unittest.mock.MagicMock(body='This fixes issue #3')
        ]

        inactive_issue_checker.inactive_issue_checker(
            'mock_token', 'mock_owner', 'mock_repo')

        mock_issue.remove_from_assignees.assert_not_called()
        mock_issue.create_comment.assert_not_called()

    def test4(self) -> None:
        """Test that issues assigned to collaborators are not unassigned."""
        mock_issue = unittest.mock.MagicMock()
        self.mock_repo.get_issues.return_value = [mock_issue]
        mock_issue.number = 4
        mock_issue.assignee = unittest.mock.MagicMock()
        mock_issue.assignee.login = 'collaborator123'
        mock_event = unittest.mock.MagicMock()
        mock_event.created_at = self.current_time - datetime.timedelta(days=10)
        mock_event.event = 'assigned'
        mock_issue.get_events.return_value = [mock_event]
        self.mock_repo.get_collaborators.return_value = [
            unittest.mock.MagicMock(login='collaborator123')
        ]

        inactive_issue_checker.inactive_issue_checker(
            'mock_token', 'mock_owner', 'mock_repo')

        mock_issue.remove_from_assignees.assert_not_called()
        mock_issue.create_comment.assert_not_called()


if __name__ == '__main__':
    unittest.main()
