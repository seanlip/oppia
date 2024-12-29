import unittest
from unittest.mock import MagicMock, patch
from datetime import datetime, timedelta, timezone
from inactive_issue_checker import check_inactive_issues

class TestCheckInactiveIssues(unittest.TestCase):
    """
    Test suite for the check_inactive_issues function.
    """

    @patch("inactive_issue_checker.Github")
    def test_unassign_inactive_issues(self, MockGithub: any) -> None:
        """
        Test that inactive issues are unassigned correctly.
        """
        mock_github = MockGithub.return_value
        mock_repo = mock_github.get_repo.return_value
        mock_issue = MagicMock()
        mock_repo.get_issues.return_value = [mock_issue]
        mock_issue.number = 1
        mock_issue.assignee = MagicMock()
        mock_issue.assignee.login = "user123"
        mock_issue.get_events.return_value = [
            MagicMock(created_at=datetime.now(timezone.utc) - timedelta(days=10))
        ]
        mock_repo.get_collaborators.return_value = []
        mock_repo.get_pulls.return_value = []

        check_inactive_issues("mock_token", "mock_owner", "mock_repo")

        mock_issue.remove_from_assignees.assert_called_once_with("user123")
        mock_issue.create_comment.assert_called_once_with(
            "@user123 has been unassigned from this issue due to inactivity "
            "for more than 7 days. If you'd like to continue working on this issue, "
            "please request to be reassigned."
        )

    @patch("inactive_issue_checker.Github")
    def test_unassign_inactive_issues(self, MockGithub: any) -> None:
        """
        Test that active issues are not unassigned.
        """
        mock_github = MockGithub.return_value
        mock_repo = mock_github.get_repo.return_value
        mock_issue = MagicMock()
        mock_repo.get_issues.return_value = [mock_issue]
        mock_issue.number = 2
        mock_issue.assignee = MagicMock()
        mock_issue.assignee.login = "user456"
        mock_issue.get_events.return_value = [
            MagicMock(created_at=datetime.now(timezone.utc) - timedelta(days=5))
        ]

        check_inactive_issues("mock_token", "mock_owner", "mock_repo")

        mock_issue.remove_from_assignees.assert_not_called()
        mock_issue.create_comment.assert_not_called()

    @patch("inactive_issue_checker.Github")
    def test_unassign_inactive_issues(self, MockGithub: any) -> None:
        """
        Test that issues with related open PRs are not unassigned.
        """
        mock_github = MockGithub.return_value
        mock_repo = mock_github.get_repo.return_value
        mock_issue = MagicMock()
        mock_repo.get_issues.return_value = [mock_issue]
        mock_issue.number = 3
        mock_issue.assignee = MagicMock()
        mock_issue.assignee.login = "user789"
        mock_issue.get_events.return_value = [
            MagicMock(created_at=datetime.now(timezone.utc) - timedelta(days=10))
        ]
        mock_repo.get_pulls.return_value = [
            MagicMock(body="This fixes issue #3")
        ]

        check_inactive_issues("mock_token", "mock_owner", "mock_repo")

        mock_issue.remove_from_assignees.assert_not_called()
        mock_issue.create_comment.assert_not_called()

    @patch("inactive_issue_checker.Github")
    def test_unassign_inactive_issues(self, MockGithub: any) -> None:
        """
        Test that issues assigned to collaborators are not unassigned.
        """
        mock_github = MockGithub.return_value
        mock_repo = mock_github.get_repo.return_value
        mock_issue = MagicMock()
        mock_repo.get_issues.return_value = [mock_issue]
        mock_issue.number = 4
        mock_issue.assignee = MagicMock()
        mock_issue.assignee.login = "collaborator123"
        mock_issue.get_events.return_value = [
            MagicMock(created_at=datetime.now(timezone.utc) - timedelta(days=10))
        ]
        mock_repo.get_collaborators.return_value = [
            MagicMock(login="collaborator123")
        ]

        check_inactive_issues("mock_token", "mock_owner", "mock_repo")

        mock_issue.remove_from_assignees.assert_not_called()
        mock_issue.create_comment.assert_not_called()

if __name__ == "__main__":
    unittest.main()
