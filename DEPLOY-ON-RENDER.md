# Deploy Parivartan on Render and make its QR code

You need three free accounts or tools: **GitHub**, **Render** and **Git** (or GitHub Desktop).
Render deploys websites from a GitHub repository, so first put this folder on GitHub, then connect it to Render.

---

## Step 1 · Check it runs on your computer

Open this folder in VS Code → **Terminal → New Terminal**:

```bash
npm install
npm run build
```

If `npm run build` ends with **“✓ built”**, you're ready.

---

## Step 2 · Put the project on GitHub

**Option A: using the GitHub website (no commands)**

1. Sign in at https://github.com → **New repository**.
2. Name it `parivartan-tcet-nss`, keep it **Public**, and click **Create repository**.
3. On the next page click **“uploading an existing file”**.
4. Open the unzipped `parivartan-highlights` folder, select **everything inside it except `node_modules`** and drag it into the browser.
   Make sure `package.json`, `render.yaml`, `index.html`, `src`, `public` and `scripts` are uploaded.
5. Click **Commit changes**.

**Option B: using Git in the VS Code terminal**

```bash
git init
git add .
git commit -m "Parivartan highlights website"
git branch -M main
git remote add origin https://github.com/<your-username>/parivartan-tcet-nss.git
git push -u origin main
```

(`node_modules` and `dist` are skipped automatically by `.gitignore`.)

---

## Step 3 · Create the site on Render

1. Sign in at https://render.com (choose **Sign in with GitHub**).
2. Click **New + → Static Site**.
3. Connect your GitHub account if asked, then pick the **parivartan-tcet-nss** repository.
4. Fill in the settings:

   | Setting | Value |
   |---|---|
   | Name | `parivartan-tcet-nss` *(this becomes your link)* |
   | Branch | `main` |
   | Root Directory | *(leave empty)* |
   | Build Command | `npm ci && npm run build` |
   | Publish Directory | `dist` |

5. Click **Create Static Site**. The first build takes 1–3 minutes.
6. When the log shows **“Your site is live 🎉”**, your link appears at the top, for example:

   **https://parivartan-tcet-nss.onrender.com**

> Shortcut: instead of steps 2–4 above, choose **New + → Blueprint** and select the repository.
> Render reads `render.yaml` from this folder and fills in all the settings for you.

Static sites on Render are free and stay online without sleeping.

**Updating the site later:** change files, push to GitHub again (or upload the changed files on GitHub),
and Render rebuilds and updates the same link automatically.

---

## Step 4 · Make the QR code for your Render link

In the VS Code terminal, inside this folder, run (with **your** link):

```bash
npm run qr -- https://parivartan-tcet-nss.onrender.com
```

This creates two files in the folder:

- `parivartan-qr.png` — high-resolution image for sharing, posters and the magazine
- `parivartan-qr.svg` — vector version that stays sharp at any print size

**Always scan the QR with your phone once** to confirm it opens your site before printing.

*No terminal?* Any free QR generator works too: paste your Render link, choose high error correction,
and download the PNG.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Build fails with `npm ci` error | Make sure `package-lock.json` was uploaded to GitHub. |
| Build fails saying Node version | The `.node-version` file sets Node 20; make sure it was uploaded. |
| Site shows a blank page | Check that the Publish Directory is exactly `dist`. |
| Photos missing | Make sure the `public/img` folder was uploaded. |
