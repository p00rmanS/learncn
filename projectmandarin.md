# PROJECT.md — Mandarin + Cantonese Mastery

## 1. Project Overview

Build a polished, interactive web-based language learning platform that teaches **Mandarin Chinese and Cantonese from absolute beginner (zero experience) to advanced proficiency**.

The experience should feel like a combination of:

- Coursera — structured courses, modules, lessons, progress
- Duolingo — short interactive exercises and motivation
- Anki — spaced repetition and review
- Language Reactor — listening-focused real-world language exposure
- A personal Filipino tutor — Taglish explanations, relatable analogies, practical everyday examples

This must **NOT** feel like a static textbook, vocabulary dump, or generic AI-generated dashboard.

The course is designed for a Filipino/English-speaking learner who may have **zero Chinese-language experience**.

Primary teaching style:

> **Simple English + natural Taglish + strong memory analogies + lots of examples + repeated listening and speaking practice.**

The product teaches two related but distinct spoken languages:

1. **Mandarin Chinese**
   - Simplified Chinese as the default written form
   - Traditional Chinese can be toggled when useful
   - Pinyin romanization
   - 4 main tones + neutral tone

2. **Cantonese**
   - Traditional Chinese as the default written form
   - Jyutping romanization
   - 6 contrastive tone categories in modern Jyutping teaching, while acknowledging traditional 9-tone descriptions when relevant
   - Hong Kong-style everyday Cantonese as the primary target

Important terminology:

- Do **not** call the Chinese writing system “Hangul.”
- Hangul is Korean.
- Chinese characters are called **Hanzi (汉字 / 漢字)**.
- Mandarin pronunciation support uses **Pinyin**.
- Cantonese pronunciation support uses **Jyutping**.

---

# 2. Product Goal

Create a course where a complete beginner can open Lesson 1 without knowing a single Chinese character and eventually progress through:

**Zero Experience → Foundations → Beginner → Elementary → Intermediate → Upper Intermediate → Advanced → Real-World Fluency**

The learner should eventually be able to:

- recognize and pronounce Mandarin and Cantonese sounds
- distinguish tones
- read Pinyin
- read Jyutping
- recognize common Hanzi
- understand character components and radicals
- understand everyday speech
- introduce themselves
- order food
- ask for directions
- talk to coworkers and guests
- understand common expressions
- hold conversations
- read practical Chinese
- understand differences between Mandarin and Cantonese
- watch simple Chinese-language content
- communicate naturally rather than translating word-for-word from English

---

# 3. Core Teaching Philosophy

Every lesson should answer these questions:

1. **Ano ito?**
2. **Paano siya ginagamit?**
3. **Bakit ganito?**
4. **Ano ang easiest way para maalala ko ito?**
5. **Ano ang common mistake ng Filipino/English speaker?**
6. **Paano ko ito maririnig sa totoong conversation?**
7. **Paano ito iba sa Mandarin/Cantonese counterpart?**
8. **Can I actually use it after this lesson?**

Avoid overly academic linguistic explanations unless the learner opens an optional **Deep Dive** section.

Default explanations should be conversational.

Example tone:

> “Think of tones parang melody ng word. Same letters, pero kapag nagbago ang pitch, puwedeng maging ibang word completely. Sa Tagalog, usually emotion lang ang nagbabago kapag tinaasan mo ang tono. Sa Mandarin at Cantonese, puwedeng meaning mismo ang magbago.”

Another example:

> “的 (de) is parang connector. Imagine LEGO glue siya. Kinakabit niya ang description sa noun.”

---

# 4. Audience

Primary learner profile:

- Filipino learner
- English is comfortable but may not be the learner's first language
- Beginner in Chinese
- Likes Taglish explanations
- Learns better through analogy and practical situations
- Wants conversational ability
- May interact with Mandarin- or Cantonese-speaking tourists, customers, coworkers, friends, or classmates
- Wants pronunciation help instead of just memorizing vocabulary

Do not assume previous knowledge of:

- Chinese characters
- tones
- Pinyin
- Jyutping
- radicals
- Chinese grammar
- Chinese culture

---

# 5. UX Principle

The learner should never feel:

> “Ang dami agad. Hindi ko alam saan magsisimula.”

Every screen should make the **next action obvious**.

The course should be broken into small lessons of roughly **5–15 minutes**.

Each lesson should normally include:

1. Hook / real-life situation
2. Learning objective
3. Short explanation
4. Memory analogy
5. Pronunciation demonstration
6. Examples
7. Mandarin vs Cantonese comparison if relevant
8. Interactive practice
9. Quick quiz
10. Speaking challenge
11. Recap
12. XP / progress update
13. Suggested review

---

# 6. Course Tracks

Allow learners to choose:

### Track A — Mandarin First

Best for learners who want the most internationally useful Chinese variety.

### Track B — Cantonese First

Best for learners focused on Hong Kong, Guangdong, Cantonese family/community, or Cantonese-speaking guests.

### Track C — Mandarin + Cantonese Together

This is a major differentiator of the platform.

Lessons show both versions without pretending that Cantonese is merely “Mandarin with different pronunciation.”

Example comparison card:

| Meaning | Mandarin | Cantonese |
|---|---|---|
| Hello | 你好 | 你好 |
| Romanization | nǐ hǎo | nei5 hou2 |
| Natural speech note | Standard greeting | Common but context matters |
| Audio | Mandarin audio | Cantonese audio |

The UI must clearly label each language.

Never merge pronunciations.

---

# 7. Curriculum Architecture

## LEVEL 0 — START HERE

Goal: Remove fear and teach the learner how Chinese works.

### Module 0.1 — What Are Mandarin and Cantonese?

Lessons:

- What is Chinese?
- Mandarin vs Cantonese
- Spoken language vs written Chinese
- Simplified vs Traditional Chinese
- What is Hanzi?
- What is Pinyin?
- What is Jyutping?
- Why tones matter
- How this course works

Memory analogy:

> Chinese is parang family ng related systems. Mandarin at Cantonese are siblings—not clones.

---

## LEVEL 1 — SOUND BOOTCAMP

This level is extremely important.

Do not rush into vocabulary before pronunciation foundations.

# Mandarin Sound System

### Module 1M.1 — Pinyin Basics

Teach:

- initials
- finals
- syllables
- tone marks
- ü
- common pronunciation traps

Examples:

- b / p
- d / t
- g / k
- j / q / x
- zh / ch / sh / r
- z / c / s

Taglish analogy example:

> Mandarin “q” is not English Q. Think of a very light “ch” sound na may hangin.

### Module 1M.2 — Mandarin Tones

Teach:

1. First tone — high and flat
2. Second tone — rising
3. Third tone — low/dipping
4. Fourth tone — sharp falling
5. Neutral tone

Use visual pitch graphs.

Mnemonic:

- 1st = “singing one straight note”
- 2nd = “Ha? / Really?”
- 3rd = “hmm…”
- 4th = “Stop!”
- neutral = quick/light

Include tone-pair drills.

Teach third-tone sandhi later.

---

# Cantonese Sound System

### Module 1C.1 — Jyutping Basics

Teach:

- initials
- finals
- tone numbers
- final consonants -p, -t, -k
- ng initial/final
- differences from English and Tagalog pronunciation

### Module 1C.2 — Cantonese Tones

Teach the common Jyutping 1–6 system.

Tone visualizer:

- Tone 1: high
- Tone 2: high rising
- Tone 3: mid
- Tone 4: low falling
- Tone 5: low rising
- Tone 6: low

Explain checked syllables naturally when relevant.

Mnemonic system should be memorable rather than academically overwhelming.

---

# LEVEL 2 — FIRST CONVERSATIONS

## Module 2.1 — Greetings

Teach:

- hello
- good morning
- thank you
- you're welcome
- goodbye
- excuse me
- sorry

Every vocabulary card must include:

- Hanzi
- Romanization
- audio
- literal meaning
- natural meaning
- language label
- example sentence
- memory clue

Example:

### Mandarin

你好  
nǐ hǎo  
Hello

Memory clue:

> “Ni hao” is the famous one. But don't memorize sound only—connect 你 = you, 好 = good.

### Cantonese

你好  
nei5 hou2  
Hello

Add:

> Same characters, different pronunciation. This is one of the easiest examples showing why written Chinese can overlap while spoken Mandarin and Cantonese sound different.

---

## Module 2.2 — Introducing Yourself

Teach:

- My name is...
- I am...
- I am from...
- I speak...
- Do you speak English?
- Do you speak Mandarin?
- Do you speak Cantonese?
- Nice to meet you.

Personalization exercise:

Learner enters name and country.

Generate examples such as:

> 我叫 James.

---

## Module 2.3 — Numbers

Teach:

- 0–10
- 11–99
- hundreds
- thousands
- phone numbers
- prices
- age
- dates

Memory-first teaching.

Interactive exercises:

- hear number → type it
- see price → say it
- random number generator
- cashier simulation

---

## Module 2.4 — Yes, No, Questions

Teach an important concept:

Chinese does not always use one universal “yes” and “no” exactly like English.

Teach response patterns based on the verb/question.

Mandarin:

- 是 / 不是
- 有 / 没有
- 对 / 不对

Cantonese:

- 係 / 唔係
- 有 / 冇
- 啱 / 唔啱

---

# LEVEL 3 — HANZI FOUNDATIONS

## Module 3.1 — Stop Being Afraid of Characters

Explain that Hanzi are not random drawings.

Introduce:

- pictographic origins
- components
- semantic hints
- phonetic components
- radicals

Example:

休 = person 人 + tree 木

Mnemonic:

> Imagine a person resting beside a tree. 休 means rest.

---

## Module 3.2 — Character Stroke Basics

Teach:

- horizontal
- vertical
- dot
- downward strokes
- hook
- turning strokes

Include stroke animations.

Interactive character writing area:

- trace
- free write
- compare
- retry

---

## Module 3.3 — High-Value Components

Teach common radicals/components progressively:

- 人 / 亻 person
- 口 mouth
- 女 woman
- 子 child
- 木 tree
- 水 / 氵 water
- 火 / 灬 fire
- 心 / 忄 heart
- 手 / 扌 hand
- 言 / 讠 speech
- 食 / 饣 food
- 日 sun/day
- 月 moon/month
- 门 / 門 door
- 马 / 馬 horse

Each gets:

- meaning
- visual analogy
- common characters
- mini quiz

---

# LEVEL 4 — SURVIVAL LANGUAGE

Modules:

### 4.1 Food and Restaurants
### 4.2 Shopping
### 4.3 Directions
### 4.4 Transportation
### 4.5 Time and Schedules
### 4.6 Hotel and Travel
### 4.7 Emergencies
### 4.8 Work and Customer Service

Build realistic scenario simulations.

Example restaurant scenario:

Customer:
> 請問，有冇水呀？

Learner chooses or speaks a response.

For service-industry learners, include practical phrases:

- Welcome
- How many people?
- This way please
- Please wait
- Would you like water?
- Enjoy your meal
- Do you have allergies?
- The restroom is over there
- The show begins at...
- Thank you for visiting

---

# LEVEL 5 — CORE GRAMMAR

Teach grammar as patterns rather than English-style grammar lectures.

## Mandarin Topics

- basic SVO
- 是
- 有
- 的
- 了
- 在
- 正在
- 过
- 不 vs 没
- 吗
- 呢
- question words
- measure words
- 把
- 被
- complements
- comparison with 比
- result complements
- directional complements

## Cantonese Topics

- 係
- 有
- 唔
- 冇
- 嘅
- 咗
- 緊
- 過
- 呀 / 喎 / 囉 / 啦 / 啫 and common sentence-final particles
- question patterns
- classifiers
- comparative structures
- aspect markers
- colloquial Cantonese grammar

For every grammar lesson:

### Pattern
### Meaning
### Taglish explanation
### Analogy
### Mandarin examples
### Cantonese comparison
### Common mistake
### Mini drill

Example:

## 的 — Mandarin possession/description linker

Pattern:

> A + 的 + B

Taglish:

> Isipin mo si 的 as connector or “property glue.”

Example:

我的朋友  
wǒ de péngyou  
my friend

Don't overtranslate word-for-word.

---

# LEVEL 6 — EVERYDAY CONVERSATION

Modules:

- family
- school
- jobs
- hobbies
- weather
- feelings
- health basics
- relationships
- routines
- weekend plans
- invitations
- opinions
- preferences
- describing people
- describing places

Introduce longer listening exercises.

---

# LEVEL 7 — INTERMEDIATE CHINESE

Goals:

- understand natural sentence flow
- use connectors
- tell stories
- explain experiences
- make comparisons
- express reasons
- give opinions
- understand common native-speed speech

Topics:

- because / therefore
- although / but
- if / then
- when / while
- before / after
- giving reasons
- storytelling timeline
- describing past experience
- making suggestions
- agreeing/disagreeing
- softening statements

Introduce real-life dialogues.

---

# LEVEL 8 — CANTONESE DEEP DIVE

Cantonese must not be treated as an afterthought.

Teach:

- colloquial written Cantonese
- sentence-final particles
- common contractions
- natural Hong Kong expressions
- spoken vs formal written Chinese
- code-switching
- English loanwords in Hong Kong Cantonese
- common slang
- casual conversation rhythm

Examples:

- 冇
- 唔
- 佢
- 哋
- 咗
- 緊
- 嘅
- 喎
- 囉
- 啦
- 啫
- 咩

Explain pragmatics.

Example:

> 咩 (me1) can add a questioning or surprised feeling. Parang “Really?” / “Is that so?” depending on context.

---

# LEVEL 9 — MANDARIN DEEP DIVE

Teach:

- tone sandhi
- 一 tone changes
- 不 tone changes
- 儿化 awareness
- regional accents
- casual contractions
- natural fillers
- discourse markers

Useful Mandarin fillers:

- 那个
- 然后
- 就是
- 其实
- 对
- 嗯
- 怎么说呢

Teach natural usage, not just dictionary definitions.

---

# LEVEL 10 — ADVANCED COMMUNICATION

Topics:

- abstract opinions
- workplace discussion
- persuasion
- polite disagreement
- storytelling
- news topics
- presentations
- professional vocabulary
- idiomatic expressions
- cultural references
- advanced listening
- formal vs informal register

---

# LEVEL 11 — REAL-WORLD FLUENCY LAB

Create scenario-based missions.

Examples:

### Mission: Restaurant

Learner must:

- greet guest
- explain food
- answer questions
- understand a request
- recommend an item
- close interaction politely

### Mission: Hong Kong Café

Handle a fast Cantonese order.

### Mission: Taiwan Night Market

Use Mandarin for prices, quantities, and food.

### Mission: Airport

Ask directions and understand gate instructions.

### Mission: New Friend

Hold a 2-minute conversation.

### Mission: Workplace

Explain a small problem to a coworker.

---

# 8. Lesson Data Model

Lessons should be data-driven rather than hardcoded page-by-page.

Suggested TypeScript structure:

```ts
type Language = "mandarin" | "cantonese" | "both";

interface Lesson {
  id: string;
  level: number;
  moduleId: string;
  title: string;
  subtitle?: string;
  language: Language;
  estimatedMinutes: number;
  objectives: string[];
  sections: LessonSection[];
  quiz?: QuizQuestion[];
  xp: number;
  prerequisites?: string[];
}
```

Vocabulary:

```ts
interface VocabularyItem {
  id: string;
  simplified?: string;
  traditional: string;
  mandarin?: {
    pinyin: string;
    audioUrl?: string;
  };
  cantonese?: {
    jyutping: string;
    audioUrl?: string;
  };
  english: string;
  taglishExplanation?: string;
  mnemonic?: string;
  examples?: ExampleSentence[];
  tags?: string[];
}
```

---

# 9. UI / Visual Direction

Style should feel:

- premium
- modern
- educational
- calm
- slightly gamified
- mobile-first
- not childish
- not cluttered

Avoid making the entire UI bright red just because the language is Chinese.

Use a sophisticated neutral interface with a limited accent palette.

Suggested visual character:

- clean typography
- generous whitespace
- rounded cards
- subtle shadows
- clear hierarchy
- large Hanzi display
- tone visualization
- audio controls
- animated progress
- smooth transitions

Chinese fonts must display correctly.

Suggested font stack:

```css
font-family:
  Inter,
  "Noto Sans SC",
  "Noto Sans TC",
  system-ui,
  sans-serif;
```

---

# 10. Main Application Structure

Primary navigation:

### Home
Continue learning, streak, progress, review queue.

### Learn
Full curriculum map.

### Review
Spaced repetition.

### Practice
Specialized drills.

### Dictionary
Search characters and vocabulary.

### Progress
Statistics and mastery map.

### Profile
Preferences and settings.

---

# 11. Dashboard

Dashboard should show:

- greeting
- current streak
- daily XP
- continue lesson
- current level
- weekly progress
- words learned
- characters learned
- listening score
- tone score
- review cards due
- recent achievements

Primary CTA:

> Continue Learning

Do not overwhelm dashboard with useless cards.

---

# 12. Curriculum Page

Use a visual learning path.

Hierarchy:

Level
→ Module
→ Lesson

Lesson states:

- locked
- available
- in progress
- completed
- mastered

Show percentage progress.

Example:

```text
LEVEL 1 — Sound Bootcamp

✓ What is Pinyin?
✓ Mandarin Tone 1
● Mandarin Tone 2
○ Mandarin Tone 3
🔒 Tone Pair Training
```

---

# 13. Lesson Player

Desktop:

```text
-------------------------------------------------
Sidebar        | Lesson Content
Course Map     |
               | Title
               | Explanation
               | Interactive Area
               |
               | [Previous] [Continue]
-------------------------------------------------
```

Mobile:

Single-column.

Sticky bottom navigation:

[Back]           [Continue]

Include a lesson progress bar.

---

# 14. Vocabulary Card Design

Each vocabulary card may show:

Large Hanzi

Traditional/Simplified toggle

Romanization

Tone visualization

Meaning

Audio button

Memory clue

Example

Favorite/bookmark button

Example:

```text
你好

Mandarin
nǐ hǎo
🔊

Hello

Memory:
你 = you
好 = good

Literally:
“You good”

Natural meaning:
Hello
```

---

# 15. Mandarin vs Cantonese Comparison Component

Create a reusable component:

```tsx
<LanguageComparison />
```

Display side-by-side when desktop.

Stack on mobile.

Example:

```text
          MANDARIN            CANTONESE

Hello     你好                  你好
          nǐ hǎo              nei5 hou2

Thank you 谢谢 / 謝謝           多謝 / 唔該
```

Include contextual notes because Cantonese often distinguishes different types of thanks.

---

# 16. Audio Features

Audio is one of the most important parts of this project.

Every important:

- syllable
- tone
- word
- sentence
- dialogue

should be capable of having audio.

Controls:

- play
- slow playback
- repeat
- loop 3x
- Mandarin speaker
- Cantonese speaker

Prepare architecture so real audio files or TTS can be connected later.

Do not rely on browser speech synthesis as the permanent solution.

---

# 17. Tone Trainer

Build a dedicated tone-training tool.

Features:

- play random syllable
- choose tone
- show correct answer
- pitch graph
- score
- streak
- replay
- slow mode

Mandarin mode:

1–4 + neutral

Cantonese mode:

1–6

Later advanced mode:

tone pairs and full words.

---

# 18. Pronunciation Lab

Sections:

### Listen and Repeat

User listens and records.

### Minimal Pair Practice

Mandarin examples:

- j / q
- zh / z
- ch / c
- sh / s
- an / ang
- en / eng

Cantonese examples based on relevant contrasts.

### Shadowing

Play short phrase.

Learner repeats immediately.

UI shows:

1. Listen
2. Repeat
3. Replay
4. Compare

Speech scoring can be mocked initially behind an interface.

---

# 19. Hanzi Writing Practice

Provide character practice.

Features:

- character shown large
- stroke order animation
- tracing canvas
- clear button
- retry
- reveal mnemonic
- related characters
- simplified/traditional variants

Do not require handwriting for every lesson.

It should be optional but integrated.

---

# 20. Memory System

Every lesson should intentionally use memory techniques.

Supported techniques:

- visual mnemonic
- story mnemonic
- sound association
- Tagalog association
- English association
- character decomposition
- contrast
- absurd imagery
- real-life context

Example:

好 = 女 + 子

Traditional etymology should not be oversimplified as factual history.

Label mnemonics clearly as memory aids when they are invented.

Example:

> **Memory trick:** Imagine “woman + child = good.” This is a mnemonic, not necessarily the full historical origin of the character.

Accuracy matters.

---

# 21. Taglish Explanation Style Guide

Taglish should sound natural.

Good:

> “Hindi mo kailangan kabisaduhin lahat agad. Ang goal muna natin is marinig mo kung tumataas, bumababa, or steady yung tone.”

Bad:

> “Ang tone ay important because kailangan mo itong i-master upang magkaroon ng linguistic competency.”

Keep technical terminology in English when that is clearer.

Do not force Tagalog translations for every technical word.

Tone should feel like:

- knowledgeable tutor
- friendly older classmate
- encouraging
- concise
- practical

Avoid repetitive filler such as:

- “Bro” in every paragraph
- “super easy”
- “don’t worry” repeatedly
- excessive emojis

Use occasional informal language naturally.

---

# 22. Exercise Types

Build reusable exercise engines.

Required:

### Multiple Choice

### Audio → Meaning

### Audio → Romanization

### Hanzi → Meaning

### Meaning → Hanzi

### Mandarin → Cantonese Match

### Tone Identification

### Fill in the Blank

### Sentence Ordering

### Pair Matching

### Type the Answer

### Listening Dictation

### Speaking Prompt

### Character Component Quiz

### Scenario Choice

---

# 23. Quiz Feedback

Feedback should teach.

Bad:

> Incorrect.

Good:

> Almost. 你好 in Cantonese is **nei5 hou2**, not **ni3 hao3**. Same characters, different spoken language.

Use:

- correct answer
- explanation
- memory reminder
- retry option

---

# 24. Spaced Repetition Review

Create a basic SRS review system.

Review categories:

- New
- Learning
- Weak
- Strong
- Mastered

Track:

- last reviewed
- correct count
- incorrect count
- interval
- ease/mastery score

Users should see:

> 18 reviews due today

Review types should rotate rather than showing identical flashcards.

---

# 25. Gamification

Use gamification but keep it mature.

Features:

- XP
- streak
- course completion
- lesson mastery
- achievements
- daily goal

Potential achievements:

- First 10 Words
- Tone Rookie
- 7-Day Streak
- 100 Characters
- Cantonese Listener
- Mandarin Speaker
- Restaurant Ready
- 1,000 XP

Do not make the interface feel like a children's game.

---

# 26. Progress Tracking

Track:

- lessons completed
- course percentage
- vocabulary learned
- characters recognized
- Mandarin tone accuracy
- Cantonese tone accuracy
- listening accuracy
- quiz scores
- daily activity
- streak
- review consistency

Show skill categories:

```text
Pronunciation      ███████░░ 78%
Listening          █████░░░░ 55%
Vocabulary         ████████░ 86%
Characters         ████░░░░░ 44%
Grammar            ██████░░░ 67%
Conversation       █████░░░░ 53%
```

---

# 27. Searchable Dictionary

Build dictionary page.

Search by:

- English
- Hanzi
- Pinyin
- Jyutping

Entry page includes:

- simplified
- traditional
- Mandarin pronunciation
- Cantonese pronunciation
- meaning
- audio
- examples
- character breakdown
- related words
- HSK relevance if available
- Cantonese usage note

Architecture should support adding dictionary datasets later.

---

# 28. Cultural Notes

Include short cultural context cards.

Examples:

- when 你好 sounds natural
- different ways to say thank you in Cantonese
- addressing older people
- family titles
- lucky/unlucky numbers
- restaurant etiquette
- Hong Kong Cantonese usage
- Mainland vs Taiwan vocabulary
- formal written Chinese vs spoken Cantonese

Avoid stereotypes.

Keep explanations factual and practical.

---

# 29. Real-Life Dialogue Format

Dialogues must look clean.

Example:

## At a Restaurant

**Server — Mandarin**

欢迎光临。  
Huānyíng guānglín.  
Welcome.

**Guest**

两位。  
Liǎng wèi.  
Two people.

Add:

- play full dialogue
- line-by-line playback
- slow mode
- hide/show English
- hide/show Pinyin/Jyutping

---

# 30. Daily Practice

Dashboard section:

## Today's Practice

- 5-minute review
- 1 listening drill
- 1 tone drill
- continue course

Allow daily goal:

- Casual — 5 min
- Regular — 10 min
- Serious — 20 min
- Intensive — 30 min

---

# 31. AI Tutor — Future-Ready Architecture

Prepare a future AI Tutor page.

Modes:

- explain grammar
- practice conversation
- roleplay
- correct sentence
- pronunciation coaching
- translate with explanation

Do not require AI integration for initial MVP.

Use mocked responses/data abstraction where needed.

---

# 32. Technical Stack

Recommended:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide icons
- Framer Motion for restrained animation
- Supabase or PostgreSQL-compatible backend
- local seed data for initial curriculum

If the existing project already uses another viable stack, **do not rewrite the entire application without a strong reason**.

Preserve working architecture where possible.

---

# 33. Suggested Directory Structure

```text
src/
  app/
    page.tsx
    learn/
    lesson/
    review/
    practice/
    dictionary/
    progress/
    profile/

  components/
    layout/
    course/
    lesson/
    audio/
    quiz/
    hanzi/
    progress/
    ui/

  data/
    curriculum/
      mandarin/
      cantonese/
      shared/
    vocabulary/
    characters/
    dialogues/

  lib/
    progress/
    srs/
    audio/
    curriculum/

  types/
    course.ts
    vocabulary.ts
    quiz.ts
    progress.ts
```

Keep educational data separate from presentation components.

---

# 34. Seed Curriculum Requirements

Do not create hundreds of empty lessons.

Start with **high-quality complete seed content**.

Minimum useful MVP:

### Level 0
5–8 lessons

### Mandarin Sound Bootcamp
8–12 lessons

### Cantonese Sound Bootcamp
8–12 lessons

### First Conversations
10–15 lessons

### Hanzi Foundations
8–10 lessons

At least:

- 100 vocabulary items
- 30 characters with useful mnemonics
- 10 dialogues
- 50+ quiz questions
- Mandarin/Cantonese comparison examples

Quality > quantity.

---

# 35. Landing Page

Hero:

# Learn Mandarin & Cantonese  
### From zero to real conversation.

Supporting copy:

> Structured lessons, Taglish explanations, pronunciation training, Hanzi memory tricks, and real-world conversations—all in one course.

CTA:

**Start Learning Free**

Secondary:

**Explore the Course**

Hero visual should show:

- Hanzi
- Pinyin
- Jyutping
- tone curves
- learning progress

Avoid stock-photo-heavy design.

---

# 36. Onboarding Flow

Ask only useful questions.

### Step 1
What do you want to learn?

- Mandarin
- Cantonese
- Both

### Step 2
Current level?

- Absolute beginner
- Know a few words
- Beginner
- Intermediate

### Step 3
Why are you learning?

- Travel
- Work
- Friends/family
- School
- Culture/media
- Personal goal

### Step 4
Daily goal

5 / 10 / 20 / 30 minutes

Then send the learner directly into their first lesson.

---

# 37. Accessibility

Require:

- semantic HTML
- keyboard navigation
- accessible buttons
- visible focus states
- sufficient contrast
- captions/transcripts for audio
- do not communicate tone using color alone
- mobile-friendly touch targets

---

# 38. Responsive Requirements

Must look excellent on:

- phone
- tablet
- laptop
- desktop

Mobile is a first-class experience.

No horizontal overflow.

Hanzi must remain readable.

Buttons must be thumb-friendly.

---

# 39. Animation Rules

Use animation for:

- lesson transitions
- quiz feedback
- progress bars
- XP
- tone visuals
- correct answer celebration

Avoid:

- constant floating objects
- excessive gradients
- distracting page-load animations
- animations that delay study

Learning must remain the focus.

---

# 40. State / Persistence

Initial version may use local storage for:

- onboarding preferences
- lesson progress
- XP
- streak
- completed lessons
- review queue
- display preferences

Design interfaces so this can later move to a real backend.

---

# 41. Settings

Include:

### Language Track
Mandarin / Cantonese / Both

### Chinese Display
Simplified / Traditional / Both

### Romanization
Show always / show on tap / hide

### Taglish Explanations
On / Off

### Audio Autoplay
On / Off

### Daily Goal
5 / 10 / 20 / 30 min

---

# 42. Important Mandarin/Cantonese Accuracy Rules

Claude must follow these rules when generating course content:

1. Never assume Mandarin pronunciation applies to Cantonese.
2. Never assume Cantonese grammar is identical to Mandarin.
3. Clearly label Mandarin and Cantonese.
4. Use Pinyin tone marks or clearly formatted numbered tones where appropriate.
5. Use standard Jyutping for Cantonese.
6. Traditional characters should be available.
7. Cantonese-specific characters such as 冇, 唔, 佢, 哋, 嘅 should be supported.
8. Explain context, not just literal translations.
9. Avoid fake etymologies.
10. Mnemonics may be creative but must be labeled as memory tricks.
11. Do not invent pronunciations.
12. Do not invent example meanings.
13. Where uncertain, mark data for verification instead of fabricating content.

---

# 43. Content Quality Rule

Do not populate the site with placeholder text such as:

> Lesson content goes here.

Do not create dozens of cards saying:

> Coming soon.

Instead, build fewer modules with complete, useful content.

---

# 44. Design Anti-Patterns

Do NOT produce:

- generic SaaS admin dashboard
- excessive glassmorphism
- giant gradients everywhere
- random emoji-heavy UI
- cards inside cards inside cards
- repeated identical dashboard statistics
- tiny text
- weak hierarchy
- placeholder educational content
- a left sidebar taking 30% of mobile width
- Mandarin and Cantonese mixed without labels

---

# 45. Course Content Template

Every lesson content file should follow a consistent schema.

```md
# Lesson Title

## Goal

By the end of this lesson you can...

## Big Idea

Simple explanation.

## Taglish Explanation

Natural Taglish explanation.

## Memory Trick

Analogy or mnemonic.

## Mandarin

Characters:
Pinyin:
Meaning:

## Cantonese

Characters:
Jyutping:
Meaning:

## Examples

...

## Common Mistakes

...

## Practice

...

## Mini Quiz

...

## Speaking Challenge

...

## Recap

...
```

---

# 46. Example Complete Micro-Lesson

## Lesson: Mandarin First Tone

### Goal

Recognize and pronounce Mandarin Tone 1.

### Big Idea

Mandarin tones change word meaning.

Tone 1 is high and steady.

### Taglish Explanation

Imagine kumakanta ka ng isang note tapos hindi siya tumataas or bumababa.

> “aaaaaa—”

Steady lang.

Hindi siya question.
Hindi rin siya pabagsak.

### Visual

```text
5 ─────────
4
3
2
1
```

### Example

妈  
mā  
mother

### Memory Trick

Think:

> “Maaaaaa!” parang long steady call mo sa mom mo.

The vowel is not actually supposed to become unnaturally long; the mnemonic is only for remembering the pitch shape.

### Listen

[Normal] [Slow] [Repeat x3]

### Practice

Which one is Tone 1?

A. má  
B. mā  
C. mà  
D. mǎ

Correct: B

### Speaking Challenge

Say:

mā

Record yourself.

### Recap

Tone 1 = high + flat.

+10 XP

---

# 47. Example Mandarin vs Cantonese Lesson

## Saying “Thank You”

Do not teach one translation only.

### Mandarin

谢谢  
xièxie

General “thank you.”

### Cantonese

多謝  
do1 ze6

Often used when receiving a gift, favor, compliment, or something substantial.

唔該  
m4 goi1

Often used for service, assistance, “please,” or smaller favors.

### Taglish Explanation

Sa English, usually “thank you” lang.

Sa Cantonese, isipin mo may dalawang common lanes:

- **多謝** → may binigay sa'yo / bigger favor
- **唔該** → may ginawa para sa'yo / service / little favor

This is not an absolute rule in every possible situation, but it's a very useful beginner distinction.

---

# 48. Phase-Based Development Plan

Claude Code should implement in phases.

## Phase 1 — Foundation

Build:

- app shell
- responsive navigation
- landing page
- onboarding
- dashboard
- curriculum page
- lesson player
- local progress storage
- seed design system

## Phase 2 — Course Engine

Build:

- lesson data model
- vocabulary components
- Mandarin/Cantonese comparison
- quiz engine
- progress tracking
- XP
- completion state

## Phase 3 — Learning Tools

Build:

- review system
- tone trainer
- pronunciation lab UI
- Hanzi writing UI
- dictionary
- favorites

## Phase 4 — Polish

Add:

- animations
- achievements
- analytics views
- accessibility improvements
- loading/error states
- mobile polish

## Phase 5 — Backend / Accounts

Optional later:

- authentication
- cloud progress
- Supabase
- user profiles
- synced SRS
- audio database
- AI tutor

---

# 49. Claude Code Execution Instructions

Before changing code:

1. Inspect the existing repository.
2. Determine existing framework, routes, dependencies, styles, and reusable components.
3. Keep working code unless there is a clear reason to replace it.
4. Identify what currently makes the output feel generic or weak.
5. Create a concise implementation plan.
6. Then begin modifying the project.

Do not merely describe what should be built.

Implement it.

When editing:

- prefer reusable components
- maintain strict TypeScript where applicable
- avoid huge monolithic files
- keep course content/data separate
- avoid unnecessary dependencies
- preserve responsive behavior
- ensure no obvious console errors
- ensure routes work

After implementation:

1. run lint/typecheck if available
2. fix errors
3. run the app
4. inspect important pages
5. correct obvious visual/layout problems
6. report what was changed

---

# 50. Definition of Done

The MVP is successful when a new learner can:

1. land on the homepage
2. understand what the product teaches
3. choose Mandarin, Cantonese, or Both
4. start from zero experience
5. complete an actual lesson
6. listen to pronunciation-ready content
7. understand the lesson through Taglish explanation
8. use a mnemonic
9. complete interactive questions
10. earn progress
11. return to dashboard
12. continue where they left off
13. review learned material
14. clearly distinguish Mandarin from Cantonese
15. experience the site comfortably on mobile and desktop

The final result should feel like a real product that could eventually become a commercial language-learning platform—not a class-project mockup.

---

# 51. Final Product Vision

The learner should eventually be able to say:

> “Dati wala talaga akong alam sa Mandarin or Cantonese. Hindi ko gets tones, characters, Pinyin, or Jyutping. Pero dahil step-by-step siya, Taglish yung explanation, may analogy, audio, practice, at comparison, gets ko na kung paano gumagana yung language—and kaya ko na siyang gamitin sa totoong conversation.”

That is the standard for this project.
