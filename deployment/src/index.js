/**
 * Cloudflare Worker for Tools-Hub.net
 * 
 * This worker serves static HTML files and handles routing.
 * For static sites, Cloudflare Pages is recommended, but this worker
 * provides flexibility for custom routing and edge logic.
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;

    // Normalize path
    if (path.endsWith('/') && path !== '/') {
      path = path.slice(0, -1);
    }

    // Route mapping
    const routes = {
      '/': 'index.html',
      '/compound-interest-calculator': 'compound-interest-calculator/index.html',
      '/compound-interest-calculator/': 'compound-interest-calculator/index.html',
    };

    // Determine file path
    let filePath = routes[path] || path.substring(1) || 'index.html';

    // Security: prevent directory traversal
    if (filePath.includes('..') || filePath.startsWith('/')) {
      return new Response('Not Found', { status: 404 });
    }

    // If using Workers Sites (ASSETS binding)
    // Try both ASSETS and __STATIC_CONTENT (legacy Workers Sites binding)
    const assets = env.ASSETS || env.__STATIC_CONTENT;
    
    if (assets && typeof assets.fetch === 'function') {
      // Create a new request for the asset
      const assetRequest = new Request(new URL(filePath, request.url).toString(), request);
      const response = await assets.fetch(assetRequest);
      
      // If asset found, return it with security headers
      if (response.status !== 404) {
        const newHeaders = new Headers(response.headers);
        newHeaders.set('X-Content-Type-Options', 'nosniff');
        newHeaders.set('X-Frame-Options', 'DENY');
        newHeaders.set('X-XSS-Protection', '1; mode=block');
        newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
        
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders,
        });
      }
    }

    // If ASSETS binding is not available, provide helpful error message
    return new Response(
      `Worker not configured properly. The ASSETS binding is not available.\n\n` +
      `This usually means:\n` +
      `1. [assets] section is not properly configured in wrangler.toml\n` +
      `2. The deployment didn't include the site files\n` +
      `3. Wrangler version might be outdated (need v3.98+)\n\n` +
      `To fix:\n` +
      `- Check wrangler.toml has [assets] section with directory = "./public"\n` +
      `- Make sure you're using Wrangler v3.98 or newer\n` +
      `- Redeploy with: npx wrangler deploy`,
      {
        status: 500,
        headers: { 
          'Content-Type': 'text/plain',
          'X-Error': 'ASSETS binding not available'
        },
      }
    );
  },
};
