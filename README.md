# Riddhi Gupta — Full Stack (MERN) Developer Portfolio

A modern, attractive, recruiter-friendly single-page portfolio website engineered for **Riddhi Gupta**, a fresher Full Stack Developer applying for **Software Developer / SDE Roles** at MNCs and startups.

![Tech Stack](https://img.shields.io/badge/Stack-React_|_Vite_|_Tailwind_CSS_|_Framer_Motion-6366f1)
![License](https://img.shields.io/badge/License-MIT-blue)
![Deployment](https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel)

---

## 🌟 Key Features

- **Recruiter-Optimized Single Page Architecture**: 6 focused sections (Home, About, Skills, Projects, Experience, Contact) with smooth-scroll navigation and zero bloat.
- **Dark / Light Theme Toggle**: Sleek dark aesthetic with glowing indigo/violet accents and a clean light mode with `localStorage` persistence.
- **Single Source of Truth (`src/data.js`)**: Edit your bio, skills, project links, job experience, stats, and social links in one file.
- **Live Project Showcases & High-Resolution Image Lightbox**:
  - **Full Stack E-Commerce (ShopX - MERN)**: Multi-step checkout, dynamic category filtering, RESTful CRUD APIs, MongoDB data layer.
  - **GanExa Digital Solution (Agency Platform)**: 3D interactive celestial sphere hero, tiered service pricing, client inquiry form with Google Sheet sync and email alerts.
  - Interactive screenshot switcher and full-screen lightbox modal for zooming in on UI screenshots.
- **Skills Categorization (No progress bars)**: Grouped cards with clean technology tags across Frontend, Backend, Databases, Languages, Web Platforms, Tools, and Engineering Practices.
- **Vertical Experience & Education Timeline**:
  - SaaS Web Builder Internship at Adaan Digital Solutions Pvt. Ltd. (Aug 2025 – Nov 2025)
  - Founder & Developer at GanExa Digital Solution (2026 – Present)
  - Bachelor of Computer Applications (BCA) — IGNOU, Delhi (2025)
  - Java Full Stack Certification — DUCAT, Pitampura (2025)
- **Interactive Contact & Recruiter Actions**:
  - One-click "Copy Email" with instant visual feedback.
  - Celebratory confetti animations on resume download and contact submission.
  - Formspree integration ready + direct `mailto:` fallback for mail clients.
- **Fast & Accessible**: Semantic HTML5, ARIA labels, responsive down to 360px mobile screens, lazy-loaded images, and preconnected Google Fonts.

---

## 📁 File Structure

```text
My_Portfolio/
├── public/
│   ├── favicon.svg               # Sleek monogram RG favicon
│   ├── Riddhi_Gupta_2026.pdf     # Resume PDF download (replace with your official PDF)
│   └── projects/                 # High-resolution screenshots of live projects
│       ├── shopx-hero.jpg
│       ├── shopx-products.jpg
│       ├── shopx-filter.png
│       ├── shopx-checkout.png
│       ├── shopx-payment.png
│       ├── shopx-footer.jpg
│       ├── ganexa-hero.jpg
│       ├── ganexa-services.jpg
│       ├── ganexa-inquiry.jpg
│       └── ganexa-nav.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky blurred glass navbar + theme switcher
│   │   ├── Hero.jsx              # Hero with open-to-work badge & CTA buttons
│   │   ├── About.jsx             # Bio, 3 recruiter stat cards & key highlights
│   │   ├── Skills.jsx            # Grouped tech cards with filter pills
│   │   ├── Projects.jsx          # Rich project cards with screenshot switcher
│   │   ├── ProjectModal.jsx      # High-res screenshot lightbox modal
│   │   ├── Experience.jsx        # Vertical timeline + education cards
│   │   ├── Contact.jsx           # Formspree form, copy email, mailto fallback
│   │   └── Footer.jsx            # Copyright & quick scroll-to-top
│   ├── data.js                   # 🎯 Centralized content file (edit everything here)
│   ├── App.jsx                   # Main layout container & theme provider
│   ├── index.css                 # Tailwind directives & glassmorphism utilities
│   └── main.jsx                  # React DOM root entry
├── index.html                    # SEO meta tags, Open Graph & fonts
├── tailwind.config.js            # Custom colors, fonts & keyframe animations
├── postcss.config.js             # PostCSS Tailwind & Autoprefixer plugin
├── vite.config.js                # Vite build configuration
├── vercel.json                   # Vercel SPA routing rewrites
└── package.json                  # Dependencies and scripts
```

---

## 🚀 Step-by-Step Local Setup

### 1. Prerequisites
Ensure you have **Node.js (v18 or higher)** installed on your computer:
```bash
node -v
npm -v
```

### 2. Navigate to your project folder
```bash
cd c:\Users\riddh\OneDrive\Desktop\My_Portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. Any edits made in `src/data.js` or any component will update instantly via Hot Module Replacement (HMR).

### 5. Create a Production Build
```bash
npm run build
```
This generates an optimized, minified bundle in the `dist/` directory ready for deployment.

---

## 🌐 How to Deploy on Vercel

### Method A: Deploy via GitHub (Recommended)
1. Initialize a Git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of modern portfolio"
   ```
2. Create a new repository on your GitHub account (`https://github.com/Riddhigupta3102/portfolio`).
3. Link and push your code:
   ```bash
   git remote add origin https://github.com/Riddhigupta3102/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
5. Click **"Add New Project"** -> select your `portfolio` repository.
6. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
7. Click **"Deploy"**. Your portfolio will be live with an SSL certificate and automatic redeployments on every git push!

### Method B: Deploy using Vercel CLI
1. Install Vercel globally (if not installed):
   ```bash
   npm i -g vercel
   ```
2. In the project directory, run:
   ```bash
   vercel
   ```
3. Follow the CLI prompts. For production release:
   ```bash
   vercel --prod
   ```

---

## ✏️ Customization & Updating Content

### 1. Edit Profile, Skills & Projects
Open [`src/data.js`](src/data.js):
- **Personal Info**: Update name, headline, pitch, social media handles, phone, or location.
- **Stats**: Update the 3 stat cards (e.g. increase live projects or experience months).
- **Skills**: Add or modify tech badges inside each category array.
- **Projects**: Change live URLs, repository links, or descriptions.

### 2. Replace the Resume PDF
Copy your latest official resume PDF to:
```text
public/Riddhi_Gupta_2026.pdf
```
Ensure the filename matches the path configured in `src/data.js` (`resumePath: "/Riddhi_Gupta_2026.pdf"`).

### 3. Replace Project Screenshots
Add your screenshots to `public/projects/` and reference their file paths in `src/data.js` under `gallery` or `primaryImage`.

### 4. Configure Formspree (Optional)
To receive contact form submissions straight to your inbox:
1. Create a free form at [formspree.io](https://formspree.io).
2. Copy your 8-character form ID (e.g. `xpzgvylq`).
3. In `src/data.js`, set:
   ```javascript
   formspreeEndpoint: "xpzgvylq",
   ```
If left empty, the form automatically falls back to an interactive confirmation + direct `mailto:` link.
