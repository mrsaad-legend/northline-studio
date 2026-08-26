# Northline Studio

Northline Studio is a front-end fashion editorial concept built for a developer portfolio. The site combines a full-screen motion-led hero, an editorial story section, a filterable collection, product detail dialogs, a horizontally scrolling arrivals rail, theme switching, and a small newsletter interaction.

The project was intentionally kept dependency-free. Everything in the interface is written with browser-native HTML, CSS and JavaScript so the behavior is easy to inspect and explain.

## Features

- responsive editorial landing page
- light and dark color themes with saved preference
- mobile navigation with keyboard escape handling
- scroll progress indicator
- intersection-based reveal animations with reduced-motion support
- filterable clothing and accessories collection
- native product detail dialog and local shortlist state
- horizontally scrolling new-arrivals rail with controls
- client-side newsletter validation
- accessible labels, focus states and semantic sections

## Tech stack

- HTML5
- CSS3
- JavaScript ES modules
- Node.js built-in HTTP server for local development

There are no runtime packages or framework dependencies.

## Run locally

Node.js 18 or newer is recommended.

```bash
npm run dev
```

Then open `http://localhost:4173`.

To run the repository checks:

```bash
npm run check
```

The check script scans text files for obvious secret patterns and runs Node syntax validation across the JavaScript modules.

## Project structure

```text
Northline-Studio/
├── index.html
├── src/
│   ├── app.js
│   ├── assets/
│   │   ├── mark.svg
│   │   └── editorial/
│   ├── modules/
│   │   ├── arrivals.js
│   │   ├── catalog.js
│   │   ├── collection.js
│   │   ├── navigation.js
│   │   ├── newsletter.js
│   │   ├── productDialog.js
│   │   ├── reveal.js
│   │   └── theme.js
│   └── styles/
│       ├── base.css
│       └── site.css
├── scripts/
│   ├── check.mjs
│   └── serve.mjs
├── LICENSE
├── THIRD_PARTY_NOTICES.md
└── package.json
```

## Screenshot

Add a project screenshot at `docs/northline-studio.png`, then use this line in the README:

```md
![Northline Studio](docs/northline-studio.png)
```

## Notes

This is a front-end concept rather than a production store. Product details and shortlist state are local to the current page session, and the newsletter form does not send data to a server.

## License

The original source code in this repository is available under the MIT License. The included editorial media files are third-party assets and are not covered by the code license. See `THIRD_PARTY_NOTICES.md` for the supplied media credits.
