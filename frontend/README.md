# My Portfolio

A modern, animated personal portfolio built with React and Vite. This project is designed to showcase professional experience, featured projects, certifications, services, testimonials, pricing, and contact details in one polished single-page experience.

The interface uses a dark cinematic theme with layered visual effects, smooth reveal animations, and section-specific ambient backgrounds to keep the page expressive without losing readability.

## Live Sections

- Hero introduction with animated background and call-to-action buttons
- About section with stats, skills, and social links
- Skills section with capability cards, tool highlights, and animated orbs
- Services section with service cards and a scrolling ticker
- Projects section with featured work and image previews
- Experience section with timeline-style career milestones
- Certificates section with certification and internship highlights
- Testimonials section with client and collaborator feedback
- Pricing section with plan comparison cards
- Contact section with a form and social links

## Features

- Single-page portfolio layout with smooth anchor navigation
- Dark theme with consistent black section backgrounds and glowing accents
- Responsive design for desktop, tablet, and mobile screens
- Animated hero, scroll reveals, floating elements, and card interactions
- Data-driven sections for projects, services, certificates, and testimonials
- Lazy-loaded images and external links with safe target handling
- Contact form integration through Formspree

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- Formspree
- OGL / Three.js ecosystem components for visual effects

## Project Structure

```text
src/
	App.jsx
	main.jsx
	index.css
	components/
	pages/
```

Important page modules:

- `pages/home.jsx` - hero section and navigation
- `pages/about.jsx` - introduction and personal summary
- `pages/skill.jsx` - skills and capability showcase
- `pages/services.jsx` - service offerings
- `pages/project.jsx` - project portfolio
- `pages/experience.jsx` - timeline and experience
- `pages/certificate.jsx` - certificates and internships
- `pages/testimonials.jsx` - testimonials and trust indicators
- `pages/pricing.jsx` - pricing plans
- `pages/connect.jsx` - contact form and social links

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone <your-repo-url>
cd My-portfolio/frontend
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Customization

You can easily personalize the portfolio by updating:

- section content in `src/pages/`
- global theme and animations in `src/index.css`
- images in `public/`
- contact details, GitHub links, and social profiles in the page data arrays

## Deployment

The project is Vite-based and can be deployed to platforms like Vercel, Netlify, or GitHub Pages with minimal changes. Build output is generated in the `dist/` directory.

## Credits

- Built by Kush Developer
- Powered by React, Vite, and Tailwind CSS

## Contact

If you want to discuss a project, collaboration, or freelance work, use the contact section in the portfolio or connect through the social links included in the site.
