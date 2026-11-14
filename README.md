# [bubudroid.me](https://www.bubudroid.me)

My personal website: plain HTML, CSS and a little JavaScript, with no
framework, no build step and nothing running on the server. The look follows
[bloops](https://github.com/Bubu-Droid/bloops) and the
[nekopurrin](https://github.com/Bubu-Droid/nekopurrin) template: Catppuccin
Latte and Mocha themes, with math rendered by MathJax.

## Preview

```bash
python3 -m http.server
```

Then open <http://localhost:8000>.

## Deploy

Vercel serves the repository as-is on every push. `vercel.json` adds trailing
slashes and security headers, and `404.html` is served for unknown paths.
