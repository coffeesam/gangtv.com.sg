# gangtv.com.sg

Static one-page website for GANG TV Media Pte Ltd, hosted on Cloudflare Workers (static assets).

## Layout

- `public/index.html`: the whole site (styles and the small copy-email script are inline)
- `public/assets/`: images
- `public/_headers`: security and cache headers that Cloudflare applies
- `public/favicon.svg`: browser tab icon

There is no build step. Cloudflare serves the `public/` folder as it is.

## Preview locally

```bash
python3 -m http.server 8787 --directory public
```

Then open http://localhost:8787.

## Publish

Hosted as a Cloudflare Worker with static assets (no Worker script), configured in `wrangler.jsonc`. Every push to `main` deploys to production. Pushes to other branches get their own preview URL.

Cloudflare Workers Builds settings:

- Project name: `gangtv-com-sg` (must match `name` in `wrangler.jsonc`)
- Build command: (empty)
- Deploy command: `npx wrangler deploy`
- Preview command: `npx wrangler versions upload`
