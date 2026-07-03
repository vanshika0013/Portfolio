# Vanshika — Frontend Developer Portfolio

A premium, dark-themed developer portfolio built with React (Vite), Framer Motion, React Router, and React Icons.

## Tech Stack
- React (Vite) — JavaScript, no TypeScript
- Pure CSS (no Tailwind, no Bootstrap)
- React Router DOM — client-side routing
- Framer Motion — animations & page transitions
- React Icons — iconography

## Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  assets/          # local images (if any)
  components/      # reusable UI: Loader, Navbar, Footer, DeskIllustration,
                    # SkillCard, ProjectCard, TimelineItem, CursorGlow,
                    # ScrollProgress, PageWrapper
  pages/           # Home, About, Skills, Projects, Experience, Contact
  hooks/           # useMousePosition (parallax + cursor glow)
  styles/          # one CSS file per component/page + theme.css (design tokens)
  data/            # skills.js, projects.js, timeline.js, experience.js
  App.jsx          # routing, loader state, layout
  main.jsx         # React entry point
```

<!-- ## Things to personalize before submission -->

<!-- 1. **Resume** — drop your resume PDF at `public/resume.pdf` (the Home page
   "Download Resume" button links to `Resume.pdf`). -->
<!-- 2. **Project screenshot** — add your real SkillSync screenshot at
   `public/assets/skillsync-cover.png` (referenced in `src/data/projects.js`).
   Until you add it, a styled placeholder box shows instead — nothing breaks. -->
<!-- 3. **Links** — update GitHub / LinkedIn / email URLs in:
   - `src/components/Footer.jsx`
   - `src/pages/Contact.jsx`
   - `src/data/projects.js` (`github`, `demo` fields)
4. **Contact form** — currently shows a success state on submit but doesn't
   send anywhere. Wire it to Formspree, EmailJS, or your own backend if you
   want real emails. -->

## Notes

- The cinematic loader (terminal boot → workspace zoom → homepage) only runs
  once per page load/refresh — this is intentional, matching the "premium
  first impression" brief.
- All colors and design tokens live in `src/styles/theme.css` as CSS
  variables — change them there to re-theme the whole site.
- Fully responsive: desktop, laptop, tablet, and mobile breakpoints are
  handled in each component's CSS file.
