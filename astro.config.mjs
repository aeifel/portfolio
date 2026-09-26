import { defineConfig } from 'astro/config';
import csp from './integrations/csp.mjs';

// `site` is only used for canonical URLs and the sitemap — it does not affect
// routing. If the site moves, change this and public/CNAME together.
export default defineConfig({
  integrations: [csp()],
  site: 'https://portfolio.hpworks.dev',
  // the floating dev-toolbar overlay, off
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'auto' },
});
