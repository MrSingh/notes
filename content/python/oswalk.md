---
title: "Python os.walk()"
Description: "Python method walk() generates directory file names."
date: 2021-01-28T14:50:18Z
draft: false
---

## Import Modules


```python
# Import Module
import os
```

## Set Path


```python
# Set Path
path = '../../content/'
```

## Find All Markdown Files In All Content Folders


```python
# Find all markdown filesin all content folders
all_ipynb_files = [os.path.join(root, name)
    for root, dirs, files in os.walk(path)
        for name in files
            if name.endswith((".md"))]
all_ipynb_files
```




    ['../../content/archive\\get-started-with-angular-2.md',
     '../../content/git\\basic-git-commands.md',
     '../../content/powershell\\PowerShell.md',
     '../../content/python\\load_csv.md',
     '../../content/python\\load_json.md',
     '../../content/python\\ws_requests_and_beautifulsoup.md',
     '../../content/vscode\\inserting_date_time.md',
     '../../content/vscode\\vscode_python_issues.md',
     '../../content/vscode\\vscode_shortcuts.md']


