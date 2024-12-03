import os
import datetime
from github import Github

INACTIVE_DAYS = 7  

def check_inactive_issues(github_token, repo_owner, repo_name):
    """
    Check for inactive issues in the given repository and unassign them if necessary.
    """
    g = Github(github_token)
    repo = g.get_repo(f"{repo_owner}/{repo_name}")
    
    for issue in repo.get_issues(state="open", assignee="*"):
        print(f"checking issue #{issue.number}")
        if not issue.assignee:
            continue
        timeline = list(issue.get_events())
        if not timeline: 
            continue
        
        last_activity_date = max(event.created_at for event in timeline)
        assignee_login = issue.assignee.login
        now = datetime.datetime.now(datetime.timezone.utc)
        days_since_activity = (now - last_activity_date).total_seconds() / 86400
        # Check if assignee is a collaborator
        collaborators = repo.get_collaborators()
        if any(collab.login == assignee_login for collab in collaborators):
            print(f"Skipping issue #{issue.number} as {assignee_login} is a collaborator")
            continue

        # checking for any PR is opened or not 
        related_prs = [
            pr for pr in repo.get_pulls(state="open") 
            if (pr.body and (
                str(issue.number) in pr.body or 
                f"#{issue.number}" in pr.body or 
                f"issue-{issue.number}" in pr.body.lower())
            )
        ]
        if related_prs:
            print(f"Skipping issue #{issue.number} as there are related open PRs")
            continue
        
        # prime condition for inactivity. 
        if days_since_activity > INACTIVE_DAYS:
            try:
               
                assignee_login = issue.assignee.login
                issue.remove_from_assignees(assignee_login)
                
                issue.create_comment(
                    f"@{assignee_login} has been unassigned from this issue due to "
                    f"inactivity for more than {INACTIVE_DAYS} days. If you'd like to "
                    f"continue working on this issue, please request to be reassigned."
                )
                print(f"Unassigned issue #{issue.number} from {assignee_login} due to inactivity")
            except Exception as e:
                print(f"Error processing issue #{issue.number}: {str(e)}")
        

if __name__ == "__main__":
    github_token = os.environ["GITHUB_TOKEN"]
    repo_owner = "oppia"  
    repo_name = "oppia"
    check_inactive_issues(github_token, repo_owner, repo_name)