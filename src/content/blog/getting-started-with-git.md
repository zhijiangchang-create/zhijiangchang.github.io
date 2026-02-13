Git is a distributed version control system that helps you track changes in your code and collaborate with others. This guide covers the essential commands to get you started.

## Installation

First, install Git on your system:

- **macOS:** `brew install git` or download from git-scm.com
- **Linux:** `sudo apt install git` (Debian/Ubuntu)
- **Windows:** Download from git-scm.com

## Initial Configuration

Set up your identity before making commits:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Essential Commands

### Creating a Repository

```bash
# Initialize a new repository
git init

# Clone an existing repository
git clone https://github.com/user/repo.git
```

### Basic Workflow

```bash
# Check status of your files
git status

# Stage changes for commit
git add filename.txt
git add .  # Stage all changes

# Commit staged changes
git commit -m "Your commit message"

# View commit history
git log
```

### Working with Remotes

```bash
# Add a remote repository
git remote add origin https://github.com/user/repo.git

# Push changes to remote
git push origin main

# Pull changes from remote
git pull origin main
```

### Branching

```bash
# Create a new branch
git branch feature-name

# Switch to a branch
git checkout feature-name

# Create and switch in one command
git checkout -b feature-name

# Merge a branch into current branch
git merge feature-name
```

## Pull Request for Peer Review

Pull requests (PRs) are a collaborative workflow for proposing and reviewing code changes before merging them into the main branch. This process helps catch bugs, improve code quality, and share knowledge across the team.

### Creating a Pull Request

```bash
# First, create and switch to a feature branch
git checkout -b feature/my-new-feature

# Make your changes and commit them
git add .
git commit -m "Add new feature"

# Push your branch to the remote repository
git push -u origin feature/my-new-feature
```

Then, on GitHub (or your Git hosting platform), navigate to your repository and click "New Pull Request" or use the link provided after pushing.

### Using GitHub CLI

```bash
# Create a pull request from the command line
gh pr create --title "Add new feature" --body "Description of changes"

# List open pull requests
gh pr list

# View a specific pull request
gh pr view 123

# Check out a pull request locally for testing
gh pr checkout 123
```

### Reviewing a Pull Request

```bash
# Fetch and checkout a PR locally
gh pr checkout 123

# After review, approve or request changes on GitHub
gh pr review 123 --approve
gh pr review 123 --request-changes --body "Please fix..."

# Merge the pull request
gh pr merge 123
```

### PR Best Practices

1. **Keep PRs small:** Smaller changes are easier to review and less likely to introduce bugs
2. **Write clear descriptions:** Explain what changes you made and why
3. **Request specific reviewers:** Choose teammates familiar with the code area
4. **Respond to feedback:** Address comments and push updates to the same branch
5. **Test before requesting review:** Ensure your changes work as expected

## Best Practices

1. **Commit often:** Make small, focused commits with clear messages
2. **Write good commit messages:** Describe what and why, not how
3. **Use branches:** Keep main/master stable, develop on feature branches
4. **Pull before push:** Always pull latest changes before pushing
5. **Review before commit:** Use `git diff` to review changes

## Conclusion

These basics will cover most of your daily Git usage. As you become more comfortable, explore advanced features like rebasing, stashing, and interactive staging.
