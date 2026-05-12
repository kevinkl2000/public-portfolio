# Kevin Ledwith Portfolio (GitHub Pages)

This is a static multi-page portfolio site designed to be hosted for free on GitHub Pages.

## Pages

- `index.html` - homepage and portfolio overview
- `about.html` - profile, skills, and CV-style code summary
- `experience.html` - work experience and education
- `projects.html` - project case studies
- `certifications.html` - certifications section, competencies, and additional information
- `contact.html` - contact details
- `styles.css` - shared styling and responsive layout
- `script.js` - mobile navigation, active-page highlight, and dynamic year

## View Locally

From the project root, run one of the following:

1. `py -m http.server 5500`
2. Open `http://localhost:5500`

If `py` is unavailable, use:

1. `python -m http.server 5500`

## Publish To GitHub Pages

### Option A: User Site

1. Create a repository named `<your-username>.github.io`.
2. Push all files in this folder to the repository root.
3. GitHub automatically serves from `main` root.
4. Site URL: `https://<your-username>.github.io`

### Option B: Project Site

1. Create a normal repository (for example `portfolio`).
2. Push all files to `main`.
3. Go to `Settings -> Pages`.
4. Choose `Deploy from a branch`.
5. Select `main` and `/ (root)`.
6. Save.
7. Site URL: `https://<your-username>.github.io/<repo-name>/`

## Updating The Site

Every push to the configured branch triggers an automatic GitHub Pages redeploy.
