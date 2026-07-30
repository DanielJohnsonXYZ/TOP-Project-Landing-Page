# Answer Engine Audit landing page

Static customer-facing website for the human-led Answer Engine Audit offer.

## Positioning

Technology collects and organises the evidence. An experienced human selects commercially meaningful buying questions, interprets the outputs and prioritises the response.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The build copies the public static files into `dist/` for Vercel:

- `index.html`
- `styles.css`
- `privacy.html`
- `404.html`
- `favicon.svg`
- `robots.txt`

## Vercel

The repository contains `vercel.json` with the build command, output directory, clean URLs and basic security headers.

Before promoting a deployment to production:

1. Confirm the latest approved GitHub commit.
2. Check every Calendly CTA and its placement-specific UTMs.
3. Test the report preview and pricing cards on desktop and mobile.
4. Check keyboard navigation, focus states and colour contrast.
5. Confirm `/privacy`, the favicon and the custom 404 page are included in the build.
6. Add the final canonical URL and Open Graph image after the domain is selected.
7. Confirm the preferred www/non-www redirect and SSL.

## Current launch gates

- Anthony approval of positioning and initial outreach.
- Final domain selection.
- Preview deployment QA.
- Production deployment.
- Controlled five-prospect pilot before the full campaign.

## Operating entity

Answer Engine Audit is a trading name operated by We Scale Startups.
