# How to Host Your Static Page

This guide covers several ways to host your Compound Interest Calculator and other static pages.

## Option 1: GitHub Pages (Recommended - Free & Easy)

GitHub Pages is free and perfect for static sites. Your site will be available at `https://yourusername.github.io/Toolshub`

### Steps:

1. **Create a GitHub account** (if you don't have one): https://github.com

2. **Initialize Git in your project** (if not already done):
   ```powershell
   cd c:\Users\kohna\Documents\Toolshub
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Create a repository on GitHub**:
   - Go to https://github.com/new
   - Name it `Toolshub` (or any name you prefer)
   - Make it **Public** (required for free GitHub Pages)
   - Don't initialize with README (you already have files)

4. **Connect and push your code**:
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/Toolshub.git
   git branch -M main
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your GitHub username)

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch and **/ (root)** folder
   - Click **Save**
   - Your site will be live at `https://YOUR_USERNAME.github.io/Toolshub/` in a few minutes

**Note:** If you want `index.html` to be the main page, make sure it's in the root directory (which it already is).

---

## Option 2: Netlify (Free & Very Easy)

Netlify offers free hosting with automatic deployments.

### Steps:

1. **Create a Netlify account**: https://app.netlify.com

2. **Drag and Drop Method** (Easiest):
   - Go to https://app.netlify.com/drop
   - Drag your entire `Toolshub` folder onto the page
   - Your site will be live instantly with a random URL like `random-name-123.netlify.app`
   - You can customize the site name in settings

3. **Git Integration Method** (Recommended for updates):
   - Push your code to GitHub (follow Option 1 steps 1-4)
   - In Netlify, click **Add new site** → **Import an existing project**
   - Connect your GitHub repository
   - Netlify will automatically deploy whenever you push changes

**Benefits:**
- Free custom domain support
- Automatic HTTPS
- Continuous deployment from Git

---

## Option 3: Vercel (Free & Fast)

Similar to Netlify, great for static sites.

### Steps:

1. **Create a Vercel account**: https://vercel.com

2. **Deploy**:
   - Install Vercel CLI: `npm i -g vercel` (or use the web interface)
   - In your project folder, run: `vercel`
   - Follow the prompts
   - Your site will be live at `your-project.vercel.app`

3. **Or use Git integration**:
   - Push to GitHub first
   - Import your repository in Vercel dashboard
   - Automatic deployments on every push

---

## Option 4: Local Development Server

For testing locally before deploying:

### Using Python (if installed):
```powershell
cd c:\Users\kohna\Documents\Toolshub
python -m http.server 8000
```
Then open: http://localhost:8000

### Using Node.js http-server:
```powershell
npx http-server -p 8000
```
Then open: http://localhost:8000

### Using VS Code:
- Install the "Live Server" extension
- Right-click on `index.html` → "Open with Live Server"

---

## Option 5: Traditional Web Hosting

If you have web hosting (cPanel, FTP, etc.):

1. Upload all files via FTP or file manager
2. Ensure `index.html` is in the root/public_html folder
3. Your site will be accessible at your domain

---

## Quick Comparison

| Option | Cost | Difficulty | Custom Domain | Auto Deploy |
|--------|------|------------|---------------|-------------|
| GitHub Pages | Free | Easy | Yes | Manual |
| Netlify | Free | Very Easy | Yes | Yes |
| Vercel | Free | Easy | Yes | Yes |
| Local Server | Free | Easy | No | N/A |
| Web Hosting | Paid | Medium | Yes | Manual |

---

## Recommended Workflow

1. **For quick testing**: Use local server (Option 4)
2. **For production**: Use GitHub Pages or Netlify (Options 1 or 2)
3. **For automatic updates**: Use Netlify or Vercel with Git integration

---

## Tips

- **Custom Domain**: All free hosting options support custom domains
- **HTTPS**: All modern hosting platforms provide free SSL certificates
- **Performance**: Netlify and Vercel have global CDNs for fast loading
- **Updates**: With Git integration, just push changes and your site updates automatically

---

## Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
