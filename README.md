# EIGSI 2026 AI Hackathon — Landing & Resources (SPA)

This repository contains the source code for the **official landing page and resources portal** for the **EIGSI 2026 AI Hackathon (EIGSI Casablanca – 20th Anniversary Edition)**.

Built as a lightweight **Single Page Application (SPA)**, the site acts as the primary interface to:
- Invite students and present the challenge
- Share the morning program and key milestones
- Centralize technical resources (videos + guidelines)

## Project context

The hackathon challenges participants to design and develop a functional prototype of an **AI‑powered Holographic Pedagogical Assistant** (“Prof IA”).

In an ideal prototype, the assistant can:
- Listen to the user (STT — Speech‑to‑Text)
- Produce a pedagogical answer using an LLM (Groq / Ollama / GPT, etc.)
- Speak out loud (TTS — Text‑to‑Speech) with **lip‑sync** (animated mouth/lips)
- Optionally render **contextual synchronized visuals** (schematics, 3D, graphs, molecules, etc.) alongside the hologram

The landing page highlights constraints, goals, and the timeline of the 2‑week build. The resources page provides starting points to help teams build a simplified prototype quickly.

## Scope

- **Landing** (`/`)
  - Hero media (images)
  - Motivation and prizes/certifications
  - Morning program (12 May 2026)
  - “What to present” guidelines (baseline vs advanced)
  - QR / CTA section
- **Resources** (`/ressources`)
  - YouTube DIY box build videos (thumbnail cards → open YouTube)
  - “Resources for the app” (prototype guidance: Brain / Face / Projection)

## Tech stack

- **React + TypeScript + Vite**
- **react-router-dom** (SPA routing)
- **framer-motion** (page transitions)

## Getting started (Windows / PowerShell)

From the repository root:

```powershell
npm install
npm run dev
```

Then open the printed URL (usually `http://localhost:5173/`).

### If PowerShell blocks `npm.ps1`

Run via CMD (no system changes):

```powershell
cmd /c "npm run dev"
```

Or allow scripts for the current session only:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run dev
```

## Assets (images / video)

Static media lives in `public/Figures/` and is referenced via `/Figures/...`.

Examples currently used:
- `public/Figures/1-Hero-Banner.png`
- `public/Figures/Header.png`
- `public/Figures/Certif.png`
- `public/Figures/Image2.png`
- `public/Figures/Firefly Scene on a minimalist student desk in a dimly lit room. On the desk, a Virtual Pedagogical A.mp4`

## Important note: autoplay audio

Modern browsers **do not allow unmuted autoplay** without a user gesture (click/tap/keyboard).
In this project:
- video can autoplay (muted),
- sound can automatically enable **after the first user gesture**, when the video is visible + hovered.

## Repository structure

- `src/pages/LandingPage.tsx` — landing page
- `src/pages/ResourcesPage.tsx` — resources page
- `src/components/AutoPlayVideo.tsx` — auto play/pause by visibility + audio gating
- `src/index.css` — global styles
