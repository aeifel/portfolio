import { defineConfig } from 'astro/config';
import csp from './integrations/csp.mjs';

// `site` is only used for canonical URLs and the sitemap — it does not affect
// routing. If the site moves to portfolio.hpworks.dev, change this and
// public/CNAME to match.
export default defineConfig({
  integrations: [csp()],
  site: 'https://hpworks.dev',
  // the floating dev-toolbar overlay, off
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'auto' },
});
