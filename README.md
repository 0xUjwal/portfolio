<div align="center">

# Ujwal's Portfolio

![Portfolio Preview](/public/assets/Thumbnail.png)

A modern, responsive developer portfolio showcasing projects, work experience, and skills — built with performance and aesthetics in mind.

[![Next.js](https://img.shields.io/badge/Next.js-15.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## Tech Stack

| Category       | Technologies                                                      |
| -------------- | ----------------------------------------------------------------- |
| **Framework**  | Next.js 15 (App Router, Turbopack)                                |
| **Language**   | TypeScript 5.9                                                    |
| **UI**         | React 19, Tailwind CSS 4, Radix UI, Lucide Icons                  |
| **Content**    | MDX (gray-matter, next-mdx-remote, Shiki syntax highlighting)     |
| **Animations** | Motion (Framer Motion), Lenis smooth scroll, View Transitions API |
| **Theming**    | next-themes (dark / light / system)                               |
| **Forms**      | React Hook Form + Zod validation                                  |
| **Analytics**  | Umami (privacy-focused)                                           |
| **Linting**    | ESLint 9, Prettier, Husky + lint-staged                           |

## Features

- **8 Project Showcases** — Each with a dedicated MDX detail page, tech stack breakdown, challenges, and learnings
- **Work Experience Timeline** — Expandable cards with company details, role descriptions, and technologies used
- **Contact Form** — Validated with Zod, submitted via Telegram Bot API
- **AI Chat Bubble** — Gemini-powered conversational assistant embedded in the portfolio
- **Dark / Light Mode** — System-aware theme switching with smooth transitions
- **Smooth Scrolling** — Lenis-powered buttery smooth scroll experience
- **View Transitions** — Native View Transitions API for seamless page navigation
- **SEO Optimized** — Dynamic metadata, Open Graph images, and sitemap generation
- **Fully Responsive** — Mobile-first design that works on all screen sizes
- **Syntax Highlighting** — Shiki-powered code blocks in MDX project pages
- **Resume Page** — Embedded resume viewer

## What Makes It Unique

- **Oneko Cat** — An interactive cat that follows your cursor around the page
- **Haptic Feedback** — Subtle vibration feedback on mobile interactions
- **Custom Technology Icons** — Hand-crafted SVG icons for Bash, JSON, OpenCV, Kotlin, Whisper, FFmpeg, TensorFlow, Streamlit, Gradio, and OpenGL
- **MDX Project System** — Full project detail pages with frontmatter-driven metadata, not just cards
- **Config-Driven Architecture** — Every section (Hero, About, Experience, Projects, Footer, Navbar) is driven by clean config files in `src/config/` — easy to update without touching components

---

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env` file:

```env
TELEGRAM_BOT_TOKEN="your-token"
TELEGRAM_CHAT_ID="your-chat-id"
GEMINI_API_KEY="your-api-key"
NODE_ENV="development"
NEXT_PUBLIC_URL="http://localhost:3000"
NEXT_PUBLIC_UMAMI_SRC="your-umami-script-url"
NEXT_PUBLIC_UMAMI_ID="your-umami-website-id"
```
