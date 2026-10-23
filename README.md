# pausepoint-privacy
Public privacy policy for the PausePoint Chrome extension.

## Website

This repository contains only the public privacy policy. The extension source code is maintained separately.

GitHub Pages publishes the static files from the root of the `main` branch. The `index.html` page uses system fonts, has no JavaScript, and loads no external resources. `.nojekyll` disables unnecessary Jekyll processing.

## Update the policy

1. Edit `privacy-policy.md`, including the effective date when changing the policy.
2. Run `node scripts/build.mjs` (Node.js 22 or newer; no dependencies to install).
3. Review `index.html` in a browser, including a mobile-sized viewport.
4. Commit and push both `privacy-policy.md` and `index.html` to `main`.
5. Wait for the GitHub Pages deployment to finish and verify the public page before changing store disclosures.

The Markdown document is the source of truth; regenerate the HTML after editing it. Keep any policy copy in the extension repository consistent with this published document.

Privacy questions can be raised in this repository's public Issues tab. Do not include sensitive information in public issues.
