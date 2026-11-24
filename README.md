# gangtv.com.sg

Static one-page website for GANG TV Media Pte Ltd, hosted on Cloudflare Pages.

## Layout

- `public/index.html`: the whole site (styles and the small copy-email script are inline)
- `public/assets/`: images
- `public/_headers`: security and cache headers that Cloudflare Pages applies
- `public/favicon.svg`: browser tab icon

There is no build step. Cloudflare Pages serves the `public/` folder as it is.

## Preview locally

```bash
python3 -m http.server 8787 --directory public
```

Then open http://localhost:8787.

## Publish

Every push to `main` deploys to production. Pushes to other branches get their own preview URL.

Cloudflare Pages settings:

- Framework preset: None
- Build command: (empty)
- Build output directory: `public`
