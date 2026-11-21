# shimondle-ai.github.io

The org site for [shimondle-ai](https://github.com/shimondle-ai), served by
GitHub Pages at https://shimondle-ai.github.io/.

Plain HTML, CSS and a little JS. No build step, no dependencies, no analytics.

```
index.html    homepage
404.html      not-found page
styles.css    all styles (dark + parchment themes)
script.js     theme toggle, scroll reveals
assets/       mark, app icon, screenshots, social card
```

## Brand

| token | value |
| --- | --- |
| periwinkle | `#8E95F2` |
| butter | `#F2EB8E` |
| canvas | `#14122A` |
| surface | `#171530` |
| panel | `#1D1A3A` |
| parchment | `#FBFAF6` |

Mark artwork comes from the app: `mark-hi.png` is the high-resolution cutout used
for the hero, studio panel and footer, and `mark-dark.png` is the compact mark for
the nav. The small `mark-light.png` is kept for light-on-light artwork. Wordmark
set in Avenir Next 700, lowercase, tight tracking.

## Deploy

Push to `main`. Pages serves the repository root.

## Preview

```bash
python3 -m http.server 4321
```
