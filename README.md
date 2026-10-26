# Mumin Tariq - Developer Portfolio

A personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS to showcase my projects, technical skills, and approach to software engineering.

**Live Website:** https://mumin-portfolio.vercel.app

## Features

- Responsive, dark-themed portfolio design
- Project showcase with technology stacks and engineering highlights
- Skills and technical expertise sections
- Professional profile and social links
- Reusable, data-driven React components
- Optimized production build using Next.js

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI:** React 19
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/Mu-m-in/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Production Build

```bash
npm run typecheck
npm run lint
npm run build
```

## Project Structure

```text
src/
├── app/                  # App Router and global styles
├── components/
│   ├── layout/           # Navbar and footer
│   ├── sections/         # Portfolio sections
│   └── ui/               # Reusable UI components
└── data/                 # Profile, projects, and skills

public/                   # Static assets
```

## Customization

Update the files in `src/data/` to edit profile details, social links, projects, and skills. See the existing README instructions for resume configuration and project preview images.

## Deployment

The portfolio is deployed on Vercel and connected to GitHub for production deployments from the `main` branch.
