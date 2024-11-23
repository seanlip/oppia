import os
import datetime
from github import Github

INACTIVE_DAYS = 0.01

def check_inactive_issues(github_token, repo_owner, repo_name):
    """
    Check for inactive issues in the given repository and unassign them if necessary.
    """
    g = Github(github_token)
    repo = g.get_repo(f"{repo_owner}/{repo_name}")
    
    for issue in repo.get_issues(state="open", assignee="*"):
        if not issue.assignee:
            continue
            
        timeline = list(issue.get_events())
        last_activity_date = max(event.created_at for event in timeline)
        
        now = datetime.datetime.now(datetime.timezone.utc)
        days_since_activity = (now - last_activity_date).total_seconds() / 86400
        
        if days_since_activity > INACTIVE_DAYS:
            # Fixed method name from remove_assignees to remove_from_assignees
            issue.remove_from_assignees([issue.assignee])
            issue.create_comment(
                f"@{issue.assignee.login} has been unassigned from this issue due to "
                f"inactivity for more than {INACTIVE_DAYS} days. If you'd like to "
                f"continue working on this issue, please request to be reassigned."
            )
            print(f"Unassigned issue #{issue.number} from {issue.assignee.login} due to inactivity")

if __name__ == "__main__":
    github_token = os.environ["ASHU_GITHUB_TOKEN"]
    repo_owner = "Ashu463"
    repo_name = "oppia"
    check_inactive_issues(github_token, repo_owner, repo_name)