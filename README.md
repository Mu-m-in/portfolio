# Mumin Tariq: portfolio (Next.js 15, App Router, TypeScript, Tailwind v4)

    npm install
    npm run dev          # http://localhost:3000
    npm run typecheck && npm run lint && npm run build

## Edit your content (all in src/data/)
- profile.ts: name, links, email (set `emailConfigured: true`), resume (`resumeAvailable: true`), siteUrl
- projects.ts: repo/demo URLs, status (`awaiting-deployment` | `live` | `in-progress`), stack, bullets
- skills.ts: skill groups and the "How I build" items

## Resume
Put the PDF at `public/resume/Mumin_Tariq_Resume.pdf`, then set `resumeAvailable: true`. Until then the button links to LinkedIn.

## Screenshots
Previews in `src/components/ui/ProjectPreview.tsx` are illustrative. To use real screenshots, add images to `public/images/` and replace the preview component with `next/image` (keep meaningful alt text).

## Deploy
Push to GitHub, import the repo on Vercel (or Netlify), and set `siteUrl` in profile.ts to the final URL.
