# Nguyen Dinh Hung — Portfolio

A responsive portfolio for Nguyen Dinh Hung, an AI Automation Engineer working on AI-agent workflows and applied machine learning.

## Stack

- Next.js App Router + React + TypeScript
- Tailwind CSS
- Lucide React for interface icons

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
npm start
```

## Project structure

```text
portfolio/
├── app/
│   ├── globals.css       # Tailwind layers and global visual system
│   ├── layout.tsx        # Metadata and root layout
│   ├── page.tsx          # Portfolio
│   └── resume/          # Print-friendly résumé
├── src/
│   ├── components/       # Hero, about, skills, experience, projects, contact
│   └── data/
│       └── portfolio_data.ts
├── public/
│   └── avatar.jpg
├── github_cleanup.md     # GitHub visibility script and README templates
└── tailwind.config.ts
```

The original static files are retained at the repository root as legacy reference material. The Next.js app is the active site entry point.

## Content updates

Edit `src/data/portfolio_data.ts` to update the profile, experience, education, skills, and projects shared by the portfolio and résumé. Add a `githubUrl` only for projects with a public repository. Visitors can open `/resume` to print or save a PDF using their browser.
