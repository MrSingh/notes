---
title: "Understanding the LLM context window and why it matters"
date: 2024-09-11T07:00:00
description: "Draft v0.1"
draft: false
labels: "Draft version"
slug: "understanding_the_llm_context_window"
images: ["llm_context_window"]
---

<img class="preview" src="../../images/llm_context_window.jpg" alt="Conceptual image of LLM and thier context windows">



## What are context windows? 

A context window is simply the chat you have with an LLM (like ChatGPT). Think of it as short-term memory! It keeps track of your prompts and its outputs as you chat. So, if you start a new chat, that context will be lost.

A context window has a limit. For example, the limit in Copilot in the Edge Browser is 8,000 tokens. A token can be a word, part of a word, character, or space. Here are some examples of when you might hit the limit:

+ A document: A 12-14 page single-spaced document is approximately 6,000 - 7,000 words, which is about 8,000 tokens.
+ A short story: Many short stories fall within the 5,000 to 10,000-word range.
+ A research paper: Typically between 3,000 to 7,000 words long.

## Why does this matter?

Depending on your user case it makes a big difference.

On your phone and on the go for most social usercases such as information retreival, personal assitance, entertainement, reccomendations, learning and health the 8000 limit will surfice in most cases.

However, in business or any activity that requires lengthy inputs, this limit won’t work. Let’s look at two business examples. Both examples need governance, but given that is in place, both can benefit from increased efficiency.

+ Policy Creation: Creating policies often involves reviewing and integrating large amounts of information, such as legal texts, regulations, and internal guidelines. An extended context window allows for the inclusion of all relevant documents and previous discussions, ensuring that the policy is thorough and well-informed. This can streamline the drafting process, reduce the risk of missing critical details, and facilitate collaboration among multiple stakeholders.

+ Code Creation: Writing code can require keeping track of various documents, code snippets and iterations.  An extended context window can help by providing a broader view of the codebase, enabling them to reference previous code snippets, documentation, and comments without losing context. This can improve code quality, reduce errors, and speed up the development process by allowing for more efficient debugging and feature implementation. 

## So what are the Pros and Cons of a larger context windows.



| **Aspect**         | **Pros**                                   | **Cons**                                       |
|--------------------|--------------------------------------------|------------------------------------------------|
| **Memory**         | Remembers more of the conversation         | More compute = more cost                 |
| **Flow**           | Keeps the conversation smoother - Less Hallucinations           | Might focus too much on old, less important info|
| **Complex Tasks**  | Can handle longer, more detailed tasks     | Takes longer to respond                        |
| **User Experience**| Fewer times you need to repeat yourself    | Might bring up outdated information            |
| **Efficiency**     | Less need to remind it of past info        | Uses more resources with each conversation     |


### Less Hallucinations

Yes and no. It really depends on the context you are giving. The quallity of the data will largly impact the output here. But given good data, yes you will get better results and less hallucnations.  There is a lot more to this and context windows are increasing in size as we speak. 

### Increased Cost


## Final Thoughts