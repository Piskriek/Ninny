# Agent Handoff Document

## Project Overview: Little Bloom Academy (Ninny)
This project is an HTML/JS/CSS web application tailored for a Grade R (Reception year) curriculum. It provides a daily interactive schedule for children, featuring variety in games, themes, and activities. 

## Key Architecture & Files
1. **`index.html`**: The main entry point containing the shell layout (sidebar, main content area, day banner). Also includes a `<div id="game-container">` where activities are rendered. It dynamically loads scripts in a specific order (`audio.js`, `data.js`, `curriculum.js`, `progress.js`, `games.js`, `app.js`).
2. **`style.css`**: Defines all styling, recently updated with ultra-premium features such as a 15-second animated gradient background, glassmorphism, 3D card flips, transitions (`.fade-out`), and a custom SVG 'magic wand' cursor.
3. **`audio.js`**: A zero-dependency procedural sound engine using the Web Audio API (`window.AudioFX`). It globally attaches sound effects to clicks, success events, and errors.
4. **`data.js`**: Stores static global data sets like `DATA.animals`, `DATA.letters`, `DATA.rhymes`, `DATA.memoryItems`, etc.
5. **`curriculum.js`**: Contains a 26-week curriculum map (`CURRICULUM` object). Each week defines its theme, accent color, designated letters/numbers, and day-specific prompts.
6. **`app.js`**: The orchestrator. Handles day tabs (`monday` to `friday`), week navigation (`setWeek`), and the dynamic generation of the daily schedule from a pool of 18 available activities using a seeded randomizer.
7. **`progress.js`**: Implements the "Grown-up Check!" dashboard, displaying stars earnt, activities completed, and curriculum progress.
8. **`games.js`**: The primary game engine containing the `activities` object. Each activity has a `render(container)` method. 

## Current State & Open Issues 🚨

We were in the middle of executing **Phase 6 & 7**. I attempted to inject Web Speech API helper functions (`speakText`, `speakBtn`) and 3 new minigames (`breathing`, `balloon`, `sorting`) into `games.js`.

**The following issues MUST be fixed immediately in the new chat:**

1. **`games.js` Syntax Error (The "Coming Soon" Bug)**: 
   - A bad regex replacement severely corrupted `games.js` around line 66-85 (`roundBadge` and `speakBtn`). This syntax error causes Node/the browser to fail parsing `games.js`.
   - Because `games.js` fails to load, the `activities` object is undefined. The fallback logic in `app.js` renders `<h2 class="game-title">Coming soon! 🌸</h2>` for *every* activity. You must repair the `roundBadge()` and `speakBtn()` functions near the top of `games.js`.

2. **Memory Suitcase Layout Bug**:
   - The user noticed that in the `suitcase` activity (`games.js`), the items being packed are overflowing or exceeding the size of their frame/container. This layout needs to be revised using CSS/flexbox adjustments inside the `renderPack()` method of the `suitcase` object.

3. **Standalone Tablet Export**:
   - The user wants a standalone version of the app built so it can be copied over to a tablet for testing. This likely just means ensuring the final HTML/CSS/JS is portable (which it is, but needs to be finalized without syntax errors).

## Instructions for Next Agent
1. **First action**: FIX `games.js`. Open `games.js`, look closely at lines 65-85, and fix the syntax error. Make sure the 3 new games (`breathing`, `balloon`, `sorting`) are correctly appended at the bottom without syntax errors. Run `node --check games.js` to verify it parses correctly.
2. **Second action**: Launch `python -m http.server 8000` (if not running) and verify everything is rendering again instead of showing "Coming soon".
3. **Third action**: Navigate to the `suitcase` (Memory Suitcase) activity and adjust the CSS properties of the item list/suitcase box so things stop overflowing.
4. **Fourth action**: Prepare instructions for the user on how to run this on their tablet or package it into a standalone directory/ZIP if needed.
