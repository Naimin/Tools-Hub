# Tools-Hub.net - Cloudflare Deployment

This directory contains the deployment configuration for Tools-Hub.net on Cloudflare.

## Project Structure

```
deployment/
├── src/
│   └── index.js          # Cloudflare Worker script
├── public/                # Static files (HTML, images, etc.)
│   ├── index.html
│   ├── compound-interest-calculator/
│   │   └── index.html
│   └── og-image.png
├── wrangler.toml          # Cloudflare Workers configuration
├── package.json           # Node.js dependencies
└── README.md              # This file
```

## Deployment Options

### Option 1: Cloudflare Pages (Recommended for Static Sites)

Cloudflare Pages is the recommended approach for static sites as it provides:
- Automatic deployments from Git
- Better performance
- Built-in CI/CD
- Free SSL certificates
- Global CDN

#### Deploy via Wrangler CLI:
```bash
cd deployment
npm install
npx wrangler pages deploy ./public
```

#### Deploy via GitHub:
1. Push this repository to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Navigate to **Pages** → **Create a project**
4. Connect your GitHub repository
5. Set build settings:
   - Build command: (leave empty)
   - Build output directory: `deployment/public`
6. Deploy!

### Option 2: Cloudflare Workers (Current Setup)

This setup uses Cloudflare Workers with Workers Sites for static file hosting.

#### Prerequisites:
- Node.js 16+ installed
- Cloudflare account
- Wrangler CLI installed globally or via npm

#### Setup Steps:

1. **Install dependencies:**
   ```bash
   cd deployment
   npm install
   ```

2. **Login to Cloudflare:**
   ```bash
   npx wrangler login
   ```

3. **Deploy:**
   ```bash
   npx wrangler deploy
   ```

4. **Configure custom domain (optional):**
   - Edit `wrangler.toml` and uncomment the routes section
   - Add your domain configuration
   - Redeploy

## Development

### Local Development:

```bash
# Start local development server
npm run dev

# Or using wrangler directly
npx wrangler dev
```

### Testing:

Test your deployment locally before pushing to production:

```bash
npm run dev
```

Then visit `http://localhost:8787` in your browser.

## Configuration

### Environment Variables

If you need environment variables, add them in `wrangler.toml`:

```toml
[vars]
ENVIRONMENT = "production"
API_KEY = "your-api-key"
```

### Custom Routes

To add custom routes, edit `src/index.js` and update the `routes` object.

### Headers and Security

Security headers are automatically added in the worker. To customize, edit `src/index.js`.

## Troubleshooting

### Issue: "Worker not configured"
- Make sure `[site]` section is uncommented in `wrangler.toml`
- Ensure the `public/` directory exists and contains your files

### Issue: Files not found (404)
- Check that file paths in `public/` match the routes in `src/index.js`
- Verify file names are correct (case-sensitive)

### Issue: Build fails
- Ensure Node.js 16+ is installed
- Run `npm install` to install dependencies
- Check that all required files exist

## Production Checklist

- [ ] All HTML files copied to `public/` directory
- [ ] All images and assets copied to `public/` directory
- [ ] `wrangler.toml` configured with correct settings
- [ ] Custom domain configured (if applicable)
- [ ] Environment variables set (if needed)
- [ ] Tested locally with `npm run dev`
- [ ] Deployed successfully
- [ ] Verified all routes work correctly
- [ ] Checked mobile responsiveness
- [ ] Verified SEO meta tags

## Support

For Cloudflare-specific issues:
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)

## License

MIT
