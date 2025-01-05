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
import requests

INACTIVE_DAYS = 0.7


def inactive_issue_checker(
    github_token: str, repo_owner: str, repo_name: str
) -> None:
    """Checks for inactive issues in the given repository and
    unassigns them if necessary.

    Args:
        github_token: str. The GitHub token for authentication.
        repo_owner: str. The owner of the repository.
        repo_name: str. The name of the repository.
    """
    headers = {
        'Authorization': f'token {github_token}',
        'Accept': 'application/vnd.github.v3+json',
    }
    repo_url = f'https://api.github.com/repos/{repo_owner}/{repo_name}'

    issues_url = f'{repo_url}/issues?state=open'
    response = requests.get(issues_url, headers=headers, timeout=10)
    issues = response.json()

    for issue in issues:
        if not issue or not isinstance(
            issue, dict) or not issue.get('assignee'):
            continue

        issue_number = issue['number']
        print(f'Checking issue #{issue_number}')
        events_url = issue['events_url']
        events_response = requests.get(events_url, headers=headers, timeout=10)
        events = events_response.json()

        if not events:
            continue

        last_activity_date = max(
            datetime.datetime.strptime(
                event['created_at'], '%Y-%m-%dT%H:%M:%SZ')
                .replace(tzinfo=datetime.timezone.utc)
            for event in events
        )

        now = datetime.datetime.now(datetime.timezone.utc)
        days_since_activity = (
            (now - last_activity_date).total_seconds() / 86400
        )

        collaborators_url = f'{repo_url}/collaborators'
        collaborators_response = requests.get(
            collaborators_url, headers=headers, timeout=10
        )
        collaborators = collaborators_response.json()

        assignee_login = issue['assignee']['login']
        if any(
            collaborator['login'] == assignee_login for collaborator
            in collaborators
        ):
            print(
                f'Skipping issue #{issue_number} as '
                f'{assignee_login} is a collaborator.'
            )
            continue

        pulls_url = f'{repo_url}/pulls?state=open'
        pulls_response = requests.get(pulls_url, headers=headers, timeout=10)
        pull_requests = pulls_response.json()
        related_pull_requests = [
            pr for pr in pull_requests
            if pr.get('body') and issue_number in {
                int(word.strip('#'))
                for word in pr.get('body', '').split()
                if word.strip('#').isdigit()
            }
        ]

        if related_pull_requests:
            print(
                f'Skipping issue #{issue_number} '
                'as there are related open pull requests.'
            )
            continue

        if days_since_activity > INACTIVE_DAYS:
            try:
                assignees_url = f'{repo_url}/issues/{issue_number}/assignees'
                unassign_response = requests.delete(
                    assignees_url,
                    headers=headers,
                    json={'assignees': [assignee_login]},
                    timeout=10,
                )

                if unassign_response.status_code == 200:
                    comments_url = f'{repo_url}/issues/{issue_number}/comments'
                    comment_body = (
                        f'@{assignee_login} has been unassigned '
                        f'from this issue due to inactivity for '
                        f'more than {INACTIVE_DAYS} days. If '
                        f'you would like to continue working on '
                        f'this issue, please request to be reassigned.'
                    )
                    requests.post(
                        comments_url,
                        headers=headers,
                        json={'body': comment_body}, timeout=10
                    )

                    print(
                        f'Unassigned issue #{issue_number} from '
                        f'{assignee_login} due to inactivity.'
                    )
                else:
                    print(
                        f'Failed to unassign issue #{issue_number}: '
                    )

            except Exception as error:
                print(f'Error processing issue #{issue_number}: {error}')


if __name__ == '__main__': # pragma: no cover
    GITHUB_TOKEN = os.environ['GITHUB_TOKEN']
    REPO_OWNER = 'oppia'
    REPO_NAME = 'oppia'
    inactive_issue_checker(GITHUB_TOKEN, REPO_OWNER, REPO_NAME)
