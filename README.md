# Nguyen Dinh Hung — Portfolio

A bright, responsive portfolio for a software engineer and AI builder working at the intersection of cybersecurity, multi-agent systems, RAG, and deep learning.

## Stack

- Next.js App Router + React + TypeScript
- Tailwind CSS
- Framer Motion for reveal animations
- Lucide React for interface icons
- `clsx` and `tailwind-merge` for composable styling

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
│   └── page.tsx          # Page composition
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

Edit `src/data/portfolio_data.ts` to update profile, skills, experience, and projects. Replace the placeholder project URLs with the final public repositories when they are ready. The resume CTA currently points to the existing Drive folder from the legacy site; add a direct PDF URL when one is available.
