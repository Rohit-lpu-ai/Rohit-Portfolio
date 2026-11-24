# Rohit Sharma — Static Portfolio

A cinematic, futuristic portfolio built with **HTML, CSS and vanilla JavaScript**. No React, Vite, Node.js or build step is required.

## Run locally

Open `index.html` directly, or use a simple local server:

```bash
python -m http.server 5500
```

Then visit `http://localhost:5500`.

## Deploy to Vercel

Upload this folder/repository to GitHub and import it into Vercel. Framework preset: **Other**. Build command: none. Output directory: `.`.

## Edit personal information

Most content is in `index.html`. Project and certification data is at the top of `script.js` in the `projects` and `certs` arrays.

## Replace resume

Replace:
`assets/resume/Rohit_Sharma_Resume.pdf`

## Contact form

The static version opens the visitor's default email client using `mailto:`. To make it serverless, connect EmailJS and replace the submit handler in `script.js` with your EmailJS service/template/public key.

## Assets

The `assets/` folder contains the profile image, resume, certificate files, favicon, robots.txt and sitemap.xml supplied with the portfolio materials.
