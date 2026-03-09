---
title: Your Notes Are Already an AI Brain
date: 2026-03-09
tags:
  - ai
  - obsidian
  - productivity
---

# Your Notes Are Already an AI Brain

I've been using Obsidian for a while now. Mostly for the usual reasons — capturing ideas, keeping notes organised, building a second brain in the way the productivity crowd tells you to. It was useful, but nothing I'd call transformative.

Then I started using Claude with an Obsidian CLI skill that lets it directly read, write, search, and modify my vault. And something clicked that I didn't expect.

**My notes stopped being a filing system. They became an operating environment.**

---

## The Thing Nobody Talks About

When people discuss AI agents and their memory, context, or knowledge systems, the conversation quickly gets technical. Vector databases. RAG pipelines. Embeddings. Fine-tuning. It can feel like this stuff is only accessible if you're an engineer willing to build infrastructure.

But here's what struck me: I already had all of that. In plain text files. Sitting in a folder on my laptop.

Obsidian stores everything as Markdown. No proprietary format, no database, no lock-in. Just `.md` files in a directory. And Markdown turns out to be — not coincidentally — the native language of AI agents.

When I ask Claude to read a note, it doesn't need to parse anything exotic. It reads the file the same way it reads any text. The structure I built for *myself* — headings, bullet points, tags, links between notes — is immediately legible to the model. The effort I put into organising my vault for my own clarity directly transfers into machine-readable context.

That realisation changed how I think about both note-taking and AI.

---

## What I Actually Do With It

The Obsidian CLI skill gives Claude the ability to operate inside my vault like a first-class participant. Here are some of the ways that plays out in practice.

**My notes as context.** Before a meeting or a decision I need to think through, I can ask Claude to pull relevant notes and use them as background. It'll read my previous thinking, my notes from earlier conversations, my drafts — and respond with full awareness of where my head has been on a topic. No copy-pasting, no manual briefing. It just goes and gets it.

**My notes as memory.** One of the annoying limitations of AI assistants is that they forget everything between sessions. With the CLI skill, I can ask Claude to write a note after a useful conversation — a summary, a decision log, a list of follow-ups. Next time I come back to a topic, that note is there. The vault becomes a persistent memory layer that survives across sessions.

**My notes as skills.** This is the one that surprised me most. I keep a folder of "how I like things done" — templates, writing preferences, recurring workflows, frameworks I use for decisions. When Claude has access to those, it doesn't just execute tasks generically. It executes them *my way*. The skill files in my vault are a personalisation layer that requires no prompt engineering on my part in the moment.

**My notes as a task queue.** I keep a daily note with tasks, open loops, and things I'm tracking. Claude can read it, act on things in it, update it when something is done, and add new items when we discuss something I should follow up on. My to-do list becomes a live interface rather than a static document I remember to check.

---

## Why Markdown Is the Right Foundation

It's worth pausing on why this works so naturally, because it's not an accident.

Markdown was designed to be readable as plain text *and* renderable as structured content. That dual nature — human-legible and machine-legible simultaneously — is exactly what you want at the boundary between a person and an AI system.

Other formats don't have this. A Word document is opaque to a model unless it's been converted. A database requires a query layer. A proprietary note app (looking at you, Notion) locks your knowledge behind an API. Markdown has no such friction. It's just text, and text is universal.

Beyond readability, Markdown's structural conventions — headings creating hierarchy, links creating a graph, tags creating categories — map cleanly onto the kinds of structures AI agents need. A heading is a semantic boundary. A `[[wikilink]]` is a pointer to another context node. A `#tag` is a classification signal. When you write good Markdown, you're building a knowledge graph that an agent can traverse without needing to infer structure from scratch.

---

## The Bigger Picture

I think we're at an early stage of something that will look obvious in hindsight: **your personal knowledge system and your AI assistant should be the same system**, or at least deeply integrated ones.

Right now, most people use AI tools and note-taking tools as separate things. You ask ChatGPT something, you get an answer, you maybe paste it into a note. Or you ask an assistant to help with a task, you give it context manually each time, it helps, and then that context evaporates.

That model is inefficient and frankly a bit sad, given what's possible. The information you capture, the context you accumulate, the way you think about problems — all of that *can* be live context for an agent working alongside you. But only if your knowledge is stored in a format the agent can natively work with.

Obsidian's bet on plain Markdown files turns out to be exactly the right architectural choice for an AI-assisted workflow. Not because they predicted this — they probably didn't, at least not fully — but because they chose simplicity and openness over features and lock-in. That choice aged incredibly well.

---

## A Few Things I've Learned

Using this setup daily for a while has produced some intuitions worth sharing.

**Structure in your notes pays compound interest.** The more clearly you write and organise your notes — consistent headings, meaningful filenames, proper tagging — the more useful they are as AI context. Sloppy notes produce sloppy agent outputs.

**Write notes like you'd brief a colleague.** When I capture something now, I ask myself: if someone smart but unfamiliar with this topic picked this note up, would they understand what I was thinking? That reframing improves both the notes themselves and their usefulness as AI context.

**Let the agent contribute to the vault.** The direction doesn't only have to be "agent reads my notes." The agent can and should write back into the vault. Decision summaries, research outputs, structured drafts — let it contribute to the knowledge base, not just consume it.

**Don't over-architect.** The temptation is to build an elaborate folder structure and tagging taxonomy before you start. Resist this. A flat vault with good titles and consistent Markdown gets you 80% of the value with 5% of the overhead.

---

## Where This Goes

The natural endpoint of this line of thinking is an AI that truly knows you — your context, your history, your preferences, the way you think — because it lives inside your knowledge system rather than outside it. Not a generic assistant you prompt afresh every time, but something closer to a persistent collaborator that's deeply contextualised in your world.

We're not fully there yet. But with Obsidian, a good CLI skill, and some intentionality about how you build your vault, you can get surprisingly close right now.

The infrastructure was there all along. It was just waiting for the agent.
