# portfolio

A personal site built as a circuit board: components are things I have built,
wired to a vertical bus of 1s and 0s that the page follows down to its ending.

Astro + TypeScript, static output. **No JavaScript bundles are shipped** — only
a handful of short inline scripts.

Lives at **portfolio.hpworks.dev**.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then writes dist/
npm run preview  # serve the build
```

Node 24 LTS, pinned in `.nvmrc` and used by CI. With nvm: `nvm use`.

## Layout

```
src/
  data/            all copy and content — edit here, not in components
    intro.ts         name, the core block, the mot, the board line
    board.ts         the components on the board
    skills.ts        the twelve core marks and the grouped rest
    quotes.ts        the rotating quote under the board
    resume.ts        /resume, the datasheet paragraphs, the profile links
  components/
    Bar.astro        top bar: name + theme toggle
    NameCard.astro   name, intro core, core marks, edge connector
    Board.astro      the bus and its components
    BoardCard.astro  one component, as a native <details>
    Ending.astro     quote, pawn separator, datasheet
    ZoomBar.astro    text-size control on /resume
    SkillsSheet.astro  the "see all" modal, rendered at build time
    SiteFooter.astro
    Binline.astro    text shown as hex or binary, decoded on hover
  lib/encode.ts      ASCII → hex / binary, run at build time
  layouts/Base.astro
  pages/
    index.astro      the board
    resume.astro     /resume
  styles/global.css
public/
  favicon.svg
  CNAME            the custom domain — see below
```

### Adding a component to the board

One entry in `src/data/board.ts`. The designator (U1, U2…), which side it hangs
on, its connector and its place in the count are all derived from the order.

### Adding a quote

One line in `src/data/quotes.ts`. One is chosen per visit.

## What runs on the client

Almost nothing, and nothing bundled:

- Cards are native `<details>` — they open with JavaScript disabled
- Hex and binary strings are encoded **at build time**, not in the browser
- Theme toggle, scroll reveal, pawn shimmer, skills modal and the résumé
  text-size control are a few lines of inline script each

There is no framework. React was used briefly for a ⌘K command palette; both
were removed — ⌘K collides with Chrome's own search shortcut, and the remaining
modal did not justify 67 kB gzipped. To bring a framework back for something
genuinely stateful:

```bash
npx astro add react
```

Only components marked `client:*` would then ship JavaScript.

## Deploying

Pushing to `main` builds and publishes to GitHub Pages via
`.github/workflows/deploy.yml`. In the repo settings, set
**Pages → Source → GitHub Actions**.

### Custom domain

`public/CNAME` contains the domain. It has to live there rather than being set
only in the Pages UI, because an Actions deploy replaces the published output
on every run and would wipe a file written by the UI.

To move the site to a subdomain:

1. `public/CNAME` → `portfolio.hpworks.dev`
2. `site` in `astro.config.mjs` → the same URL (canonical tags and sitemap only;
   it does not affect routing)
3. At the registrar, a **CNAME record** for `portfolio` pointing at
   `aeifel.github.io` — a bare hostname, no scheme and no path
4. Settings → Pages → Custom domain → the same value

For the apex (`hpworks.dev`) DNS does not permit a CNAME record, so that needs
either `A` records to GitHub's four Pages IPs or an `ALIAS`/`ANAME` record if
the registrar supports one.

## Still to come

- Projects section between the board and the footer (Delta lives there)
- Remaining components: `apart-from-work/`, `governance/`, `voice/`
- Per-page doodle loading animations

## Security posture

- No backend, forms, APIs or third-party scripts; nothing is fetched at runtime
- Content Security Policy is set via `<meta>` in the layout. `script-src` is
  strict: `integrations/csp.mjs` hashes every inline script at build time and
  removes `'unsafe-inline'`. Editing a script changes its hash automatically
- `style-src` still needs `'unsafe-inline'`, because inline `style=` attributes
  carry per-element values (pip colours, animation delays, offsets). Style
  injection is far less dangerous than script injection
- GitHub Pages cannot set response headers, so `frame-ancestors` and
  `X-Content-Type-Options` are not covered — they need a proxy or another host
- `set:html` is used for copy and inline SVG. Every value is repository-owned.
  **Do not** feed those fields from a CMS, form, API or untrusted contributor
  without replacing the HTML strings with structured content
- Workflow actions are pinned to commit SHAs, not mutable tags
- The résumé names no employer, no location and no institution

### Before launch, in GitHub settings

- Pages → verify the custom domain with the TXT record GitHub provides
- Pages → Enforce HTTPS, once the certificate has issued
- Branch protection on `main`: require review, restrict who can deploy
- Avoid wildcard DNS, and remove the DNS record if Pages is ever turned off

## Notes

- `astro check` does not yet support TypeScript 7, so TypeScript is pinned to 6.
  It is also slated for deprecation in favour of `@astrojs/ts-content-mapper`.
- `RESUME.roles` and `Quote.where` are kept in the data but not currently
  rendered.
