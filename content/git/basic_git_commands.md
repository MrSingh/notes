---
title: "Basic Git Commands"
date: 2020-11-01T10:05:19Z
description: ""
draft: false
labels: ""
---

***

### Add remote repository

```bash
git remote add origin https://github.com/user/repo.git
```

### Check Remote Repository

```bash
git remote -v
```

### Change Current Branch Name

```bash
git branch -m <newname>
```

### Change Any Branch Name

```bash
git branch -m <old-name> <new-name>
```

#### Clone/Download

```bash
git clone https://github.com/username/projectName.git
```

#### Create a new branch

```bash
git checkout -b new-branch
```

### Stage All Changes

```bash
git stage -all
```

#### Add Files

```bash
git add .
```

#### Commit

```bash
git commit -a -m "Commit Comment"
```

#### Push

```bash
git push origin gh-pages
```