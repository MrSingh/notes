---
title: "OpenClaw - Installation and First Impressions"
date: 2024-10-11T07:00:00
draft: false
labels: ""
slug: "openclaw_first_impressions"
type: "Blog"
---

I installed OpenClaw this weekend. I wanted to see what all the fuss was about and was intrigued to find out what it could do for me. 

## First, the installation!

A lot of work has gone into streamlining the installation to make it as easy as possible. 

One command in the terminal and you're off.

```bash
# https://openclaw.ai/
# Works everywhere. Installs everything. You're welcome. 🦞
curl -fsSL https://openclaw.ai/install.sh | bash
```

OpenClaw needs Node v22+, so my version on Linux was updated. And before you know it it's installed.

Before you start integrating OpenClaw **you are warned**, that this is hobby project and still in beta as part of the on boarding process. At this point you decide if you want to take the security risks and whether you will continue or not. Note the commands that you are advised to run regularly.

```bash
# Run regularly
openclaw security audit
openclaw security audit --deep
openclaw security audit --fix
openclaw security audit --json
# Must read
# https://docs.openclaw.ai/gateway/security/index
```

For me, everything is backed up and whilst I did want to run it on a sandboxed environment, I really wanted to give it a ago. I don't intend to keep running it on my machine.

I chose the Quick start method and the first thing you have to decide is the AI model you choose to integrate with. I have Github Copilot subscription so I went with that and integration with that was fairly straightforward and you select the the model, in my case the default was gpt-4o and I just ran with that.

Next, you select how you are going to interact with OpenClaw. I selected Telegram. Setup was fairly straightforward. 

Next you install the skills that you want OpenClaw to have. It recommends using HomeBrew and because I didn't have it installed it gave me the command to run and that's where I made a rookie error. In the process of cutting and pasting, I accidentally used `ctrl+c` in the terminal running the OpenClaw installation - **this stopped the installation!** I just reran it and went the through the steps as before. I selected all of them and it had a few issues with that and I couldn't integrate with Google, which i primarily wanted so I could integrate OpenClaw with my Google Calendar.

I skipped the enable hooks part but it's something I will enable when I install it on my sandbox environment.

## Time to see what it can do

In Telegram, I asked if it had access to my machine.

	Yes, I can interact with your machine within the limits you've set. For example, I can read files, execute commands, and run tools when needed. Let me know what you'd like me to do, and I'll make sure to ask for clarification if something requires your explicit consent!

I asked it to give me the status and configuration of my machine.

	Here's the current status and configuration of your machine:
	• Operating System: Linux Mint 22.2 (64-bit)
	• Host: ThinkPad
	... 
	
	Let me know if you'd like more detailed information or assistance!


It gave me the full status of my machine, including CPU, Memory, Memory usage, Packages, Resolution, Desktop Environment, GPU etc.

I then focused on security and asked it to summarise the results in a file for me to review later. I also asked for it to create a task list and and add the review task to it with a link to the file. It said it was done.

I started adding tasks to the task list and before long I had created a task list and bunch of files for me to review later.

**I thought, this is brilliant. And it is!** But, when I looked at the task list and compared it to the conversation I had been having, there were issues. The tasks, in Obsidian where meant to have a created date attached, they didn't, even though in the chat they were formatted in exactly the way I wanted. I'm not sure exactly why, but I suspect it's the model.

**OpenClaw does suggest that you use the best model you can and I don't think GPT-4o is good enough for this project.**

Regardless of that I see massive potential here, not only for individuals but for businesses as well. 

The architecture of integrating a memory, skills, access with AI has huge potential. I've only scratched the surface of what you can do, but I know that this will have huge implications for how we deploy AI at home and at work. It's been a real eye opener.

For me, integrating it with Github, and setting up rules and security will mean vibe coding on the go. Here are some initial thoughts.

+ Vibe Coding from your mobile
+ Automating your schedule
+ Automating Replies to Email
+ Automating research
+ Scheduling tasks and Prompts
+ Automating Security and System Audits
+ Stock Analysis Agent
+ Data Insights
+ ...

The list is endless. The possibilities to integrate are endless.

Whilst this all can be done in some shape or form already, what's different is how you do it. You do it via a single(or multiple) point of entry. A true AI assistant.

Again, this just scratches just the surface of you an do and whilst this is a hobby project, and **certainly not enterprise- ready**, it gives you lots of ideas how a similar architecture could be deployed for enterprise.

Inevitably security and governance will be particularly key for businesses. And we are already seeing similar architecture projects springing up and those could form the basis of what could work in a business environment.

See:

+ NanoClaw - Built with security in mind and designed to run in a container environment
+ PicoClaw - Smaller infrastructure focusing on automating repetitive tasks.
+ TrustClaw - Sand-boxed, managed and hosted. Not open-source.
+ NanoBot - A clean and minimal agent framework in Python.


From a person perspective, I see the potential and business leaders should understand it's capabilities if only to understand the potential use cases for their own business. 






