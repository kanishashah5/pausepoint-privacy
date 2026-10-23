import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// A separate static document: never included in the extension build or ZIP.
const root = new URL('../', import.meta.url);
const policy = await readFile(new URL('privacy-policy.md', root), 'utf8');
const escape = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
function inline(text) {
  return escape(text)
    .replace(/\[([^\]]+)\]\((https:\/\/[^\s)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
const content = policy.trim().split(/\r?\n\s*\r?\n/).map(block => {
  if (block.startsWith('# ')) return `<h1>${inline(block.slice(2))}</h1>`;
  if (block.startsWith('## ')) return `<h2>${inline(block.slice(3))}</h2>`;
  return `<p>${inline(block.replace(/\r?\n/g, ' '))}</p>`;
}).join('\n');
const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="PausePoint privacy policy: data handling, permissions, storage, and your controls.">
  <meta name="color-scheme" content="light">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'">
  <title>PausePoint Privacy Policy</title>
  <style>
    :root { color-scheme: light; font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #283641; background: #f6f5f1; }
    * { box-sizing: border-box; }
    body { margin: 0; padding: 48px 20px; line-height: 1.75; }
    main { max-width: 820px; margin: auto; background: #fff; padding: clamp(24px, 5vw, 56px); border: 1px solid #dce1e4; border-radius: 20px; }
    h1 { margin: 0 0 12px; font-size: clamp(1.8rem, 5vw, 2.5rem); line-height: 1.2; letter-spacing: -.035em; }
    h2 { margin: 36px 0 10px; font-size: 1.2rem; line-height: 1.4; }
    p { margin: 0 0 18px; }
    h1 + p { color: #53636f; }
    a { color: #365d7c; text-underline-offset: 3px; overflow-wrap: anywhere; }
    a:hover { text-decoration-thickness: 2px; }
    a:focus-visible { outline: 3px solid #365d7c; outline-offset: 4px; border-radius: 2px; }
    code { font-size: .9em; background: #eef1f3; padding: 2px 5px; border-radius: 4px; overflow-wrap: anywhere; }
    @media (max-width: 480px) { body { padding: 16px 10px; } main { border-radius: 12px; } }
    @media print { body { padding: 0; background: white; } main { border: 0; padding: 0; } }
  </style>
</head>
<body><main>
${content}
</main></body>
</html>
`;
const output = root;
await mkdir(output, { recursive: true });
await writeFile(new URL('index.html', output), html);
await writeFile(new URL('.nojekyll', output), '');
console.log(`Privacy page generated at ${fileURLToPath(new URL('index.html', output))}`);

