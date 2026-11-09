import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const entry = resolve(root, 'scripts/_validate_entry.ts');
const out = resolve(root, 'scripts/_validate_bundle.mjs');

await build({
  entryPoints: [entry],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: out,
  logLevel: 'silent'
});

const mod = await import(pathToFileURL(out).toString() + `?t=${Date.now()}`);
const { failures } = mod.run();
if (failures.length) {
  console.error(`FAIL: ${failures.length} issue(s)`);
  for (const f of failures) console.error('  - ' + f);
  process.exit(1);
}
console.log('PASS: 36 topics, groups, related links, Place/WebPage schemas and language purity validated from source.');
