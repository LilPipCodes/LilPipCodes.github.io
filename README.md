Operating Systems — Project Website
===================================

This repository contains a static multi-page website built with HTML, CSS, and vanilla JavaScript. It's designed for local preview (VS Code Live Server) and deployment to GitHub Pages.

Quick local preview
-------------------
1. Open this folder in VS Code.
2. Install the "Live Server" extension (if not already installed).
3. Right-click `index.html` and choose "Open with Live Server" or use the Live Server command.

Files of interest
-----------------
- `index.html` — Home page
- `about.html` — About page
- `style.css` — Main stylesheet
- `script.js` — Injects header/footer and mobile menu behavior
- `laboratory-*.html`, `windows-*.html`, `finals-part*.html` — Content pages

Deployment to GitHub Pages
--------------------------
1. Initialize a Git repository and commit the files (if not already under Git).

```bash
git init
git add .
git commit -m "Initial site"
```

2. Create a repository on GitHub and add it as remote, for example:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

3. Enable GitHub Pages in the repository settings:
   - Go to the repository on GitHub > Settings > Pages
   - Under "Build and deployment", choose "Deploy from a branch"
   - Select the `main` branch and `/ (root)` folder, then Save
   - GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`

Notes & compatibility
---------------------
- The header uses `backdrop-filter` for glassmorphism; modern browsers (Chrome, Edge, Safari) support this. A solid-gradient fallback is included for browsers without support.
- All pages are static HTML — no server needed.
- Ensure your repo serves from the correct branch and folder for GitHub Pages.

Accessibility & performance
---------------------------
- Semantic HTML tags are used (`header`, `nav`, `main`, `section`, `footer`).
- Focus outlines and hover effects included for keyboard users.
- Keep image sizes optimized if you add media to avoid slow loads.

If you'd like, I can:
- Add a small GitHub Actions workflow to automatically build/publish (not required for static sites),
- Run a checklist for missing internal links or 404s,
- Or tweak visual details (fonts, spacing, or color tweaks).

Enjoy — open `index.html` in Live Server to preview locally.