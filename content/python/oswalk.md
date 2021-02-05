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
all_md_files = [os.path.join(root, name)
    for root, dirs, files in os.walk(path)
        for name in files
            if name.endswith((".md"))]
all_md_files
```




    ['../../content/archive\\get-started-with-angular-2.md',
     '../../content/content\\about\\about.md',
     '../../content/git\\basic_git_commands.md',
     '../../content/powershell\\PowerShell.md',
     '../../content/python\\drop_dataframe_columns.md',
     '../../content/python\\load_csv.md',
     '../../content/python\\load_json.md',
     '../../content/python\\ossystem.md',
     '../../content/python\\oswalk.md',
     '../../content/python\\resources.md',
     '../../content/python\\write_dataframe_to_json.md',
     '../../content/python\\ws_requests_and_beautifulsoup.md',
     '../../content/test\\data_analysis.md',
     '../../content/test\\jira_data_analysis.md',
     '../../content/test\\reddit_wallstreetbets.md',
     '../../content/vscode\\inserting_date_time.md',
     '../../content/vscode\\vscode_python_issues.md',
     '../../content/vscode\\vscode_shortcuts.md']




```python

```
