# OpenSky Global marketing website

Public marketing site for [OpenSky Global](https://github.com/your-org/OpenSky) (satellite + drone intelligence, OS Atlas).

Layout and UX follow the same patterns as modern infrastructure marketing sites (fixed nav, hero + stats, solution cards, sector pages, demo CTA). Content and brand are OpenSky-specific.

## Stack

- Vite 6 + React 19 + TypeScript
- Tailwind CSS 4
- React Router 7
- EN / FR via `src/i18n`

## Assets

Brand marks and hero photography are copied from the main OpenSky repo (`docs/business/01-company/brand-assets/`). Re-copy when marketing images change:

```bash
cp ../OpenSky/docs/business/01-company/brand-assets/os-mark.svg public/
cp ../OpenSky/docs/business/01-company/brand-assets/raster/*.png public/brand/
cp ../OpenSky/docs/business/01-company/brand-assets/raster/*.jpg public/brand/
cp ../OpenSky/docs/business/01-company/brand-assets/marketing/*.jpg public/images/
cp ../OpenSky/docs/business/_pdf/09-brochures__company-brochure.pdf public/opensky-company-brochure.pdf
```

Regenerate rasters after SVG changes: `npm run brand:raster` from the main OpenSky repo.

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Deploy

Static output in `dist/`. Suitable for Vercel, Cloudflare Pages, or any static host. Set the production domain when ready (e.g. `opensky-global.com`).

## Contact

Demo form is placeholder until CRM wiring. Production email: `jarjuadama101@gmail.com`.
