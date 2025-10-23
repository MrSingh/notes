---
title: "The LLM Paradox: The Strategic Limitations of Scale, Accuracy, and Cost"
date: 2025-10-23T07:00:00
draft: false
labels: ""
slug: "llm_limitations"
version: 0.1
---

Here are the most significant limitations in AI and why you should be aware of them.

## Context Window(Short-term Memory)

The Context Window is a limited size buffer that holds the most recent parts of the conversation including the original prompt and recent conversation. 

Here is why context is lost in many conversations:

### Context Window Overload

The Context Window is a hard limit placed by AI companies - as your conversation gets longer the earlier conversation can be pushed out and lost, causing it to 'forget', the earlier conversation. The inability to learn from conversations like a human would is by design. As mentioned earlier ,the short-term memory - The Context Window is limited so it can't learn from the conversation and the context is lost when the chat ends.

### Lost in The Middle

This is a structural problem where LLM models tend to prioritise  information at the beginning and most recent conversation, often losing important details from the middle of a long exchange or document.

### Ineffective Retrieval

When using RAG or other long-term memory system, if the algorithm fails to correctly identify the most relevant information  for the current query then the model won't have the correct context and ultimately not return the correct answer.

### Cumulative Drift

When the conversation is complex with multiple corrections the model may over-rely on initial or incorrect assumptions and struggle with  scattered information leading to a complete misunderstanding of the task.

## Not Intelligent Enough(Yet)

Whilst LLMs are great at creating boilerplate code, it's not intelligent because it remains a statistical-pattern-matching system. This means while it does an excellent job of mimicking a human, it struggles with multi-step problems, real-world logic combined with the inability to learn continuously it is unreliable to be fully autonomous.

Here are some of the reasons why:

### Hallucinations

The reason LLMs hallucinate is simple, they do not have the ability to reason and can struggle with basic logic. It then fabricates the most statistically plausible next word confidentially as it were right. You may even get incorrect citations that it presents as fact.

### Lack of Computer Control

Yes, some models connect to search engines and code interpreters but they lack the ability to connect to computers to preform autonomous tasks. 

### Limited Multimodality Integration

The LLMs are mostly text based whilst some have some sort of vision and audio capability bolted on, it is not seamless. True intelligence will require a seamless integration of sound, vision and computing coupled with continuous learning.

### Missing Cognitive Core

We have the best autocomplete the world has ever seen, but essentially with all the buzz that is where we are.  We are missing the reasoning and logic and whilst it appears real, it's far from real intelligence.

##  Business Implications and Operational Risk

### Wasted Spend and High Latency

The computational cost of using large context windows for every interaction can significantly impact your bottom line. Furthermore, unnecessary data added to the context window, such as an entire large document, increases API call latency (slower response times) and can paradoxically **decrease** accuracy due to the "Lost in the Middle" problem.

### Financial and Legal Liability due to Hallucinations

The problem of hallucinations isn't new but because of lack of awareness incorrect citations and made up-case law having been turning up in law suits across the globe. Worth checking your insurance policy to see if AI loses are included.

### Lost of Trust and Reputation

Providing customers with incorrect information can not only lead to financial liabilities but can damage a companies trust and reputation.

### Cost of implementing AI

Putting AI in place, requires significant cost, governance and training. Without guardrails companies are putting themselves. 

## Final Thoughts

Your strategy must account for the reality that considerable human effort will be required to **build, govern, correct errors, and monitor** the performance of AI systems, along with the need for significant infrastructure scaffolding and operational governance.

This is why a clear strategy, taking into account the limitations and cost of AI, will better inform whether you require **increased rules-based automation** or a **fully-fledged LLM solution**.

It's not all doom and gloom; AI provides vast opportunities to increase productivity. With the right operational governance and employee literacy, there is ample opportunity to increase productivity and potentially reduce costs in targeted, high-value areas.

