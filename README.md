# Aditya Singh — Marketing Portfolio

A personal portfolio website for Aditya Singh, Marketing Team Lead at Corizo Edutech.

## 📁 Folder Structure

```
portfolio/
├── index.html                     ← Main portfolio page
├── .nojekyll                      ← Prevents GitHub Pages from running Jekyll
├── README.md                      ← This file
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── certs/
        ├── hubspot-social-media-certification.jpeg
        └── corizo-internship-certificate.pdf
```

## 🚀 GitHub Pages Deployment

### Step 1 — Push to GitHub
Push the **contents of this folder** (not the folder itself) to the root of your repo.
Your repo root should look like:
```
/
├── index.html
├── .nojekyll        ← CRITICAL — must be here
├── README.md
├── css/
├── js/
└── assets/
```

### Step 2 — Configure GitHub Pages
1. Go to your repo → **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Branch: `main` (or `master`), Folder: **/ (root)** ← NOT /docs
4. Click **Save**

### ⚠️ Common Errors Fixed
- **"Build with Jekyll" error** → Fixed by `.nojekyll` file in root
- **"No such file or directory @ dir_chdir0 - /github/workspace/docs"** → Fixed by setting Pages source to `/ (root)` not `/docs`

## 📝 Updating Content
- **Bio / info**: Edit `index.html`
- **Add a cert**: Drop file in `assets/certs/` and add a card in the certs section
- **Resume**: Save as `assets/resume-aditya-singh.pdf`, then add in hero actions:
  ```html
  <a href="assets/resume-aditya-singh.pdf" target="_blank" class="btn-outline">Download Resume</a>
  ```
- **Colors**: Edit CSS variables at top of `css/style.css`

## 🔗 Links
- Email: adityasinghnnic@gmail.com
- LinkedIn: linkedin.com/in/aditya-singha84409246
