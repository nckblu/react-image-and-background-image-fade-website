# React Image and Background Image Fade Website

The v2 website for `react-image-and-background-image-fade`: a funky, polished, static product-docs site built with Next App Router.

## Stack

- Next 16 App Router
- React 19
- TypeScript
- CSS Modules
- Static export
- Local package dependency: `file:../react-image-and-background-image-fade`

## Development

```bash
npm install
npm run dev
```

## Quality Gate

```bash
npm run check
```

This runs typecheck, lint, static content tests, static export build, and Playwright smoke tests.

## Notes

- The site imports `react-image-and-background-image-fade/styles.css` globally.
- Demos use the local sibling package directly, so the website tracks v2 package work before publishing.
- Stale v1 prop names are allowed only in migration documentation.
