# परिवर्तन · Parivartan — TCET NSS UNIT

*Prakriti ka Sankalp, Parivartan ka Vikalp* · Volume 6 · Issue 1.0 · 2026-27

Built with **React 18 + Vite 5 + Tailwind CSS 3 + Framer Motion**. The fonts (Rozha One, Fraunces, Manrope, Mukta) are bundled with the site, so it works offline too.

---

## Run it in VS Code (recommended)

You need **Node.js 18 or newer** (download the LTS version from https://nodejs.org).

1. Unzip `parivartan-highlights.zip`.
2. In VS Code: **File → Open Folder…** → select the `parivartan-highlights` folder (the one with `package.json`).
3. Open the terminal: **Terminal → New Terminal** (or ``Ctrl + ` ``).
4. Run these two commands:

   ```bash
   npm install
   npm run dev
   ```

5. Your browser opens at **http://localhost:5173**. Every time you save a file, the page updates.
6. To stop the site, click in the terminal and press **Ctrl + C**.

`npm install` is needed only the first time.

## Make a new build after editing

```bash
npm run build      # writes the finished site into /dist
npm run preview    # optional: check the build at http://localhost:4173
```

## Where things are

```
src/
  content.json          articles, poems, faculty article and all 25 projects (full text)
  site.js               magazine details, council names, achievements, teams
  pages/Home.jsx        the highlights page
  pages/About.jsx       About Parivartan
  pages/ProjectPage.jsx project page (photo + full content)
  pages/ArticlePage.jsx article reader (student + faculty)
  pages/PoemPage.jsx    poem reader
  components/Chrome.jsx header and footer
public/img/             logos, council photo, one photo per project
```

## Deploy and QR code

See **DEPLOY-ON-RENDER.md** for step-by-step Render deployment and how to create the QR code (`npm run qr -- <your link>`).

**Not Me But You · Jai Hind!**
