---
title: "Add an Existing Project to GitHub"
author: "Puneet Thukral"
date: 2021-02-16T06:00:00
slug: "git_add_project"
draft: false
---

[Resource](https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line)

***

1. Create a new repository for your project on GitHub.

2. Open Git Bash from your local folder.

3. Initialize the local directory as a Git repository.

```bash
git init -b main 
```

4. Add the files in your new Git repository. This will stage all the files in your project ready for the first commit.

```bash
git add .
```

5. Commit the added files.

```bash
git commit -m "First commit"
```

6. From GitHub, copy the remote repository URL.

7. Add the URL you just copied for the remote repository. This iswhere your local files will be pushed to.

```bash
# Set Remote Repository # Add your URL in place of <REMOTE_URL>
git remote add origin  <REMOTE_URL> 
```

8. Verify remote

```bash
git remote -v
```

9. Push your project to GitHub

```bash
git push origin main
```

## Problem Shooting

If you encounter problems with this you may want to try ``` $ git pull --rebase ``` before attempting to push again.
