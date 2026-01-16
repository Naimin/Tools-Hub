# Deployment Guide - Cloudflare Workers

Follow these steps to deploy your Tools-Hub.net site to Cloudflare Workers.

## Prerequisites

1. **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
2. **Cloudflare Account** - [Sign up here](https://dash.cloudflare.com/sign-up)
3. **Wrangler CLI** - Will be installed automatically

## Step-by-Step Deployment

### Step 1: Install Node.js Dependencies

Open a terminal/command prompt in the `deployment` folder and run:

```bash
npm install
```

This will install Wrangler CLI and other dependencies.

### Step 2: Login to Cloudflare

Authenticate with your Cloudflare account:

```bash
npx wrangler login
```

This will open your browser to authorize Wrangler. Click "Allow" to grant permissions.

### Step 3: Deploy to Cloudflare Workers

Deploy your worker:

```bash
npm run deploy
```

Or directly with Wrangler:

```bash
npx wrangler deploy
```

### Step 4: Get Your Worker URL

After deployment, you'll see output like:

```
✨ Deployment complete!
🌍 https://tools-hub.YourSubdomain.workers.dev
```

Your site is now live at that URL!

## Alternative: Deploy to Cloudflare Pages (Recommended)

For static sites, Cloudflare Pages is often better. To deploy with Pages:

```bash
npm run pages:deploy
```

Or:

```bash
npx wrangler pages deploy ./public
```

## Custom Domain Setup

### Option 1: Via Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your domain
3. Go to **Workers & Pages** → **Your Worker** → **Triggers**
4. Add a custom domain or route

### Option 2: Via wrangler.toml

1. Edit `wrangler.toml`
2. Uncomment and configure the routes section:

```toml
routes = [
  { pattern = "tools-hub.net/*", zone_name = "tools-hub.net" },
  { pattern = "www.tools-hub.net/*", zone_name = "tools-hub.net" }
]
```

3. Redeploy: `npm run deploy`

## Local Development

Test your site locally before deploying:

```bash
npm run dev
```

Then visit `http://localhost:8787` in your browser.

## Troubleshooting

### Issue: "npm is not recognized"
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal after installation

### Issue: "Authentication failed"
- Run `npx wrangler login` again
- Make sure you're logged into the correct Cloudflare account

### Issue: "Worker not configured"
- Make sure `[site]` section is in `wrangler.toml`
- Verify `public/` folder exists with your files

### Issue: "Files not found (404)"
- Check that all files are in `deployment/public/`
- Verify file paths match routes in `src/index.js`

## Updating Your Deployment

After making changes:

1. Update files in `public/` if needed
2. Run `npm run deploy` again
3. Changes go live immediately!

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Login to Cloudflare
npx wrangler login

# Deploy to Workers
npm run deploy

# Deploy to Pages
npm run pages:deploy

# Local development
npm run dev

# View deployment status
npx wrangler deployments list
```

## Need Help?

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Community](https://community.cloudflare.com/)
