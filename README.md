# Dawit Mebrahtom — Architecture Portfolio

A premium architecture portfolio website built with React (Vite) and CSS Modules, generated from Dawit Mebrahtom's Architecture Portfolio PDF (2026–2027).

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/components` — one folder per component, each with its own `.module.css`
- `src/data` — all project, skill, and gallery content (edit these to update site content without touching JSX)
- `src/assets/images` — images extracted from the source PDF, organized per project

## To personalize

- Replace `src/assets/images/profile.jpg` with Dawit's real photograph (currently a placeholder).
- Update social links in `src/components/Contact/Contact.jsx` and `src/components/Footer/Footer.jsx`.
- Update the map embed query in `Contact.jsx` if the studio location changes.

## Dark Mode

Toggled via the switch in the navbar. Theme preference is remembered in `localStorage` and respects the visitor's OS preference on first visit.
