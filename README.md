# Clone Spreadsheet

A searchable directory of fragrance clones and perfume dupes: affordable alternatives to designer and niche scents, with the discount, price, and scent similarity for each match.

Built with React 19, TypeScript, Vite, Tailwind CSS v4, and shadcn/ui.

## Status

The UI is complete for the landing page; the catalogue is static mock data in `src/data/clones.ts`. Search and the US/EU price toggle work client-side against that data. There is no backend yet.

## Run locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open http://127.0.0.1:4731. Vite hot-reloads on save.

Other scripts:

```bash
npm run build     # typecheck + production build into dist/
npm run preview   # serve the production build
npm run lint      # oxlint
```

## Project layout

```
src/
  App.tsx                      page shell: search, count, currency toggle, card grid
  data/clones.ts               mock catalogue and the Clone type
  components/
    site-header.tsx            top bar with logo and links
    hero.tsx                   title, trust badge, intro copy
    currency-toggle.tsx        US / EU segmented control
    clone-card.tsx             one clone: bottle, names, discount, price, similarity, deal link
    bottle-icon.tsx            placeholder bottle illustration
    flags.tsx                  inline SVG flags
    ui/                        shadcn/ui primitives (Badge, Card, Input)
```

## Next steps

- Replace `src/data/clones.ts` with a real data source (API, spreadsheet export, or CMS).
- Swap `BottleIcon` for product images.
- Wire the "Suggest new clone" and "Report an issue" links to forms.
