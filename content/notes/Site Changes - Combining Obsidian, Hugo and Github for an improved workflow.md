---
title: "Site Changes - Combining Obsidian, Hugo and Github for an improved workflow"
date: 2026-01-07T07:00:00
description: ""
draft: true
labels: "#blog"
slug: "site_changes_jan_2026"
---

In an effort to share more I made some changes to simplify the layout and styles. In doing so I decided to improve my workflow and integrate my Git repository directly into my Obsidian Vault. 

## Why, you may ask?

Well, so I can focus on content creation in Obsidian. It allows me to switch between my notes and flag the ones I want to share quickly from a single environment. I can create templates for different types of content and maintain a consistent style through simple Markdown.

## So, what changed?

My blog repository predates my Obsidian vault so I hadn't thought about it before. But when I came across a blog about someone who had integrated Obsidian, Hugo and GitHub I new that it would help my workflow.

For me the changes was fairly straightforward. Here's what I did:

+ Improved Hugo integration and reduced custom layouts
+ Improved the styles to be more readable
+ I then copied the entire Git repository/workspace into my Obsidian Vault.
+ To test I opened it in VSC and then served it locally with: `hugo serve -D`.
+ I then tested by committing and pushing the content to my GitHub repository.

## Thinks to watch out for

+ Make sure you commit your changes before the move - consider a WIP branch if needed.
+ Your AI chats are linked to your workspace in VSC so consider looking into that if you need to refer back to those chats before moving

## What's Next

+ Obsidian templates with front-matter
+ Update the resources section
+ Schedule builds
+ Further Automation
+ Git hooks, maybe!

