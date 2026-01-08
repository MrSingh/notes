---
title: "How I Revamped My Website Menu in Half a Day!"
date: 2024-09-06T07:00:00
description: ""
draft: false
labels: ""
slug: "copilot_menu"
type: "Blog"
build:
    list: never
    publishResources: false
    render: never
---

<!-- <img class="preview" src="../../images/copilot_menu.jpg" alt="Playful image of a rabbit in a suit working on his laptop in an office"> -->


## The Problem

My website had a static menu along the top bar and, whilst it served a purpose, it was not working on mobile. I knew it needed fixing and evolving.

## Step 1 - Give Copilot some context

I cut and paste the current menu system into Copilot.

## Step 2 - The Prompt

    I need to create a responsive dropdown menu for mobile and a side panel for desktop. Can you provide the HTML and CSS for this?

Copilot gave me the HTML code and CSS. I noticed an error, not by Copilot but one I had previously made. There were some height attributes hard-coded into the HTML, so I asked it to revise this and move the height styling into the CSS.

## Step 3 - Change class and ID names

I asked it to change the class and ID names to prevent any conflicts.

## Step 4 - Test and review

Everything worked well except I decided I wanted a side panel to hold the menu. So I prompted it to do that and asked it to select an appropriate menu icon from the Google Material library.

## Step 5 - Mobile styles adjustment

The styles on mobile were not quite right. I observed what needed changing and requested those changes be made.

## Step 6 - Merge CSS

Something was still wrong. I reverted the code and realized I had tweaked the CSS to fix something. So I pasted my CSS into Copilot and asked it to merge that with the last iteration.

## Step 7 - Test and review again

Looking good!

## Step 8 - Create reusable code

I use Hugo for my website, so I asked it to create a menu ‘partial’, a snippet of code that can be used in a templating system.

## Step 9 - Test and review again

Looking good!

## Step 10 - Deploy

 <div class="thoughts-box">
  <i class="material-icons">psychology</i>
  <div class="thoughts-content">
    <h4>Thoughts</h4>
    <ul class="thoughts-list">
      <li><i class="material-icons">lightbulb</i>I was able to do this in half a day. If I had to do this from scratch, it would have taken 3-5 days, possibly longer!</li>
      <li><i class="material-icons">lightbulb</i>The other important thing here is the Pilot - me, guiding this process. I have the environment to test, develop, and deploy, and most importantly, the technical background and know-how to facilitate this fast development.</li>
      <li><i class="material-icons">lightbulb</i>This process allowed me to quickly and efficiently update my website’s menu system, ensuring it works seamlessly across all devices.</li>
      <li><i class="material-icons">lightbulb</i>Did it reduce time resource? Yes, absolutely - 100%!</li>
       <li><i class="material-icons">lightbulb</i>Rather than reduce teams, the potential is to increase output and improve products and services.</li>
    </ul>
  </div>
</div>

<!-- 
What’s important here is I was able to do this in half a day. If I had to do this from scratch, it would have taken 3-5 days, possibly longer! The other important thing here is the Pilot - me, guiding this process. I have the environment to test, develop, and deploy, and most importantly, the technical background and know-how to facilitate this fast development. -->


