import { createHash } from 'node:crypto';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, extname } from 'node:path';

/**
 * Replaces `'unsafe-inline'` in the CSP's script-src with a SHA-256 hash of
 * every inline script actually present in each built page.
 *
 * Done after the build rather than in the template because the hash has to
 * match the final emitted bytes exactly.
 */
async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (extname(entry.name) === '.html') yield path;
  }
}

// inline scripts only: no src, and no non-executable type
const INLINE = /<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi;
const NON_JS = /type\s*=\s*["'](?!module|text\/javascript|application\/javascript)/i;

export default function csp() {
  return {
    name: 'csp-hashes',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        let pages = 0;
        for await (const file of htmlFiles(dir.pathname)) {
          const html = await readFile(file, 'utf8');
          const hashes = new Set();
          for (const [, attrs, body] of html.matchAll(INLINE)) {
            if (NON_JS.test(attrs)) continue;
            hashes.add(`'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`);
          }
          // Replace only the 'unsafe-inline' token inside script-src, so any other
          // source in that directive survives. [^;] keeps the match from
          // wandering into style-src, which legitimately keeps 'unsafe-inline'.
          const out = html.replace(
            /script-src ([^;]*?)'unsafe-inline'/,
            (_, rest) => `script-src ${rest}${[...hashes].join(' ')}`,
          );
          if (out !== html) { await writeFile(file, out); pages++; }
        }
        logger.info(`script-src hashed on ${pages} page(s) — 'unsafe-inline' removed`);
      },
    },
  };
}
