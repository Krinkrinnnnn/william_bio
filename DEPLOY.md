# Deploy your site to the web

## Option 1: Vercel (recommended for Next.js)

1. **Put your code on GitHub**
   - Create a new repo at https://github.com/new (e.g. `krin` or `william-chung-portfolio`).
   - In your project folder, run:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
     git push -u origin main
     ```
   - Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.

2. **Deploy on Vercel**
   - Go to https://vercel.com and sign in with GitHub.
   - Click **Add New…** → **Project**.
   - Import your GitHub repo (e.g. `krin`).
   - Leave the defaults (Framework: Next.js, Build Command: `next build`, Output: default).
   - Click **Deploy**.
   - When it finishes, you get a URL like `https://krin-xxxx.vercel.app`. That is your live site.

3. **Custom domain (optional)**
   - In the Vercel project: **Settings** → **Domains**.
   - Add your domain (e.g. `www.yourname.com`) and follow the DNS instructions.

---

## Option 2: Netlify

1. Push your code to GitHub (same as above).
2. Go to https://netlify.com → **Add new site** → **Import an existing project** → GitHub → choose your repo.
3. Build command: `npm run build`, Publish directory: `.next` (or leave Netlify’s Next.js detection).
4. Deploy. You’ll get a URL like `https://random-name.netlify.app`.

---

## Before you deploy

- Your app uses `/profile.png` in the **public** folder. Ensure `public/profile.png` exists so your photo shows on the live site.
- Env vars: this project doesn’t use `.env` in the current setup; if you add any later, set them in Vercel/Netlify under **Environment Variables**.
