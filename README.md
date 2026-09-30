# portfolio

A personal site built as a circuit board: each component is something I have
built, wired to a vertical bus that runs the length of the page.

**[portfolio.hpworks.dev](https://portfolio.hpworks.dev)**

## Approach

Astro and TypeScript, static output, no client framework.

The site ships no JavaScript bundle. Cards are native `<details>` and open with
scripting disabled, hex and binary strings are encoded at build time rather than
in the browser, and the few interactive pieces — the theme toggle, the skills
sheet, the résumé text size, the project page's contents index and the
architecture diagram's enlarge — are a handful of lines of inline script each.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then writes dist/
npm run preview  # serve the build
```

Node 24 LTS, pinned in `.nvmrc` and used by CI. With nvm: `nvm use`.

## Structure

```
src/
  data/          all copy and content — edited here, not in components
  components/    the board and its cards, the projects row, the footer
  pages/         index, /resume, /projects/*
  layouts/       the shared document head
  lib/           build-time helpers
  styles/
public/          favicon, link-preview card, resume PDF, robots.txt,
                 sitemap.xml, CNAME
integrations/    build-time Content Security Policy hashing
```

Content lives in `src/data`. Adding a component to the board or a project to the
row is one entry in the relevant file — designators, ordering, side and the
counts in the headings are all derived from it.

## Security

- No backend, forms or APIs. The only third-party request is Cloudflare Web
  Analytics, which counts page views without cookies or personal data
- A Content Security Policy is applied through a meta tag. `script-src` carries
  a SHA-256 hash for every inline script, generated at build time by
  `integrations/csp.mjs`, and `'unsafe-inline'` is removed. Editing a script
  changes its hash on the next build. The analytics beacon is allowed by origin
  rather than by hash, and is the only external script the policy admits
- `set:html` is used only for repository-owned copy and inline SVG
- Workflow actions are pinned to commit SHAs rather than mutable tags
- HTTPS is enforced on the custom domain

## Deployment

Pushing to `main` builds and publishes to GitHub Pages through
`.github/workflows/deploy.yml`, with Pages set to deploy from GitHub Actions.

The custom domain is held in `public/CNAME` rather than only in the Pages UI,
because an Actions deploy replaces the published output on every run and would
otherwise overwrite it. `site` in `astro.config.mjs` should match; it sets the
canonical URLs and the sitemap, not routing.
