# Rahul Thulasi – Personal Portfolio Website

A modern, responsive personal portfolio website built with **React + Vite**, showcasing my academic background, technical skills, and personal projects.

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build Tool | Vite 6 |
| Styling | Plain CSS with CSS Variables |
| Icons | Lucide React |
| Deployment | GitHub Pages / Vercel / Netlify |

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── rahul-profile.jpg          # Profile photo
│   ├── Rahul_Thulasi_Resume.pdf   # Resume PDF
│   └── favicon.svg                # Site favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css      # Responsive navigation
│   │   ├── Hero.jsx / .css        # Hero section with photo
│   │   ├── About.jsx / .css       # About me section
│   │   ├── Skills.jsx / .css      # Technical skills
│   │   ├── Projects.jsx / .css    # Project showcase
│   │   ├── Education.jsx / .css   # Education timeline
│   │   ├── ResumeSection.jsx/.css # Resume download
│   │   ├── Contact.jsx / .css     # Contact details
│   │   └── Footer.jsx / .css      # Footer
│   ├── App.jsx                    # Root component
│   ├── App.css                    # App-level styles
│   ├── index.css                  # Global styles & tokens
│   └── main.jsx                   # React entry point
├── index.html                     # HTML shell with SEO meta
├── vite.config.js                 # Vite configuration
└── package.json
```

## ⚙️ Setup & Development

### Prerequisites
- Node.js 18+ 
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Build for Production

```bash
npm run build

# Preview the production build locally
npm run preview
```

The production build will be in the `dist/` folder.

## 🌐 Deployment

### Option 1: Vercel (Recommended — easiest)

1. Push this `portfolio/` folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → Import Project.
3. Select the repository — Vercel auto-detects Vite.
4. Click **Deploy**. No configuration needed.

> The resume PDF and profile photo in `public/` are included automatically.

### Option 2: Netlify

1. Push to GitHub.
2. Go to [netlify.com](https://netlify.com) → New site from Git.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy.

### Option 3: GitHub Pages

1. Install the GitHub Pages deploy package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. In `vite.config.js`, set:
   ```js
   base: '/your-repo-name/'
   ```

4. Run:
   ```bash
   npm run deploy
   ```

> ⚠️ **Note for GitHub Pages:** Update the `base` in `vite.config.js` to match your repository name. Otherwise, asset paths will break.

## ✅ Features

- ✅ Responsive — works on mobile, tablet, laptop, and desktop
- ✅ Sticky navbar with mobile hamburger menu
- ✅ Smooth scroll navigation with active section tracking
- ✅ Real profile photo (natural outdoor portrait)
- ✅ Honest skills from actual resume — no fake proficiency bars
- ✅ 3 real projects with accurate descriptions
- ✅ Working resume PDF download (`Rahul_Thulasi_Resume.pdf`)
- ✅ Working `mailto:` and `tel:` links
- ✅ Real GitHub link (`github.com/Rahul-thulasi`)
- ✅ SEO meta tags and Open Graph
- ✅ Accessible — keyboard navigable, focus states, ARIA labels
- ✅ Dark theme with subtle blue accents

## 📧 Contact

**Rahul Thulasi**  
Email: rtgt2004@gmail.com  
Phone: +91 8590653469  
GitHub: [github.com/Rahul-thulasi](https://github.com/Rahul-thulasi)  
LinkedIn: [linkedin.com/in/rahul-thulasi](https://www.linkedin.com/in/rahul-thulasi)  
Location: Trivandrum, Kerala, India (Native) · Studying at GEC Wayanad

---

*Built with React + Vite. © 2026 Rahul Thulasi.*
