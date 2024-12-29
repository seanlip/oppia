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

"""Inactive issue checker script for Oppia."""

from __future__ import annotations

import datetime
import os
from github import Github

INACTIVE_DAYS = 7


def inactive_issues(github_token: str, repo_owner: str, repo_name: str) -> None:
    """Checks for inactive issues in the given repository and 
    unassigns them if necessary.

    Args:
        github_token: str. The GitHub token for authentication.
        repo_owner: str. The owner of the repository.
        repo_name: str. The name of the repository.
    """
    github_client = Github(github_token)
    repository = github_client.get_repo(f'{repo_owner}/{repo_name}')

    for issue in repository.get_issues(state='open', assignee='*'):
        print(f'Checking issue #{issue.number}')

        if not issue.assignee:
            continue

        timeline = list(issue.get_events())
        if not timeline:
            continue

        last_activity_date = max(event.created_at for event in timeline)
        now = datetime.datetime.now(datetime.timezone.utc)
        days_since_activity = (
            (now - last_activity_date).total_seconds() / 86400
        )

        collaborators = repository.get_collaborators()
        if any(
            collaborator.login == issue.assignee.login
            for collaborator in collaborators
        ):
            print(
                f'Skipping issue #{issue.number} as '
                f'{issue.assignee.login} is a collaborator.'
            )
            continue

        related_pull_requests = [
            pr for pr in repository.get_pulls(state='open')
            if issue.number in {
                int(word.strip('#'))
                for word in pr.body.split() if word.strip('#').isdigit()
            }
        ]
        if related_pull_requests:
            print(
                f'Skipping issue #{issue.number} '
                'as there are related open pull requests.'
            )
            continue

        if days_since_activity > INACTIVE_DAYS:
            try:
                assignee_login = issue.assignee.login
                issue.remove_from_assignees(assignee_login)
                issue.create_comment(
                    f'@{assignee_login} has been unassigned '
                    f'from this issue due to inactivity for '
                    f'more than {INACTIVE_DAYS} days. If '
                    f'you would like to continue working on '
                    f'this issue, please request to be reassigned.'
                )
                print(
                    f'Unassigned issue #{issue.number} from {assignee_login} '
                    f'due to inactivity.'
                )
            except Exception as error:
                print(f'Error processing issue #{issue.number}: {error}')


if __name__ == '__main__':
    GITHUB_TOKEN = os.environ['GITHUB_TOKEN']
    REPO_OWNER = 'oppia'
    REPO_NAME = 'oppia'
    inactive_issues(GITHUB_TOKEN, REPO_OWNER, REPO_NAME)
