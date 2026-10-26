# 👾 MONSTRARIUM

[Română](README.ro.md) · [English](README.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Recycled-materials monster workshop — planner + bestiary of 50 original monsters, in a single offline HTML file.**

_Version: 2.0.0 · Last updated: 26.10.2026_

## What it is

MONSTRARIUM works out by itself which recycled materials to collect for a monster workshop with at least 50 children — nobody supplies the materials, and the organizer has only 4 days to gather them from a small local area. The first page is a parade of all 50 monsters.

## Features

- **Parade** — the front page: all monsters marching; tap one to open its sheet.
- **Plan** — number of children, series at a single table, helpers, 120 L bags, car trips; a 4-day preparation checklist.
- **Materials** — quantities, substitutes (lean mode), collection counters and a ready-to-send donor message.
- **Schedule** — workshop phases, series at one table, zones, safety rules.
- **Bestiary** — 50 original monsters; each lists its parts and the total of all materials.
- **Monsters** — a unique monster for every child, printable cards with a materials list.
- **Monster generator** — editor with locks (🔒), mutations, Bestiary remixes and a shareable code; for all children it creates up to 500 different monsters, by difficulty or time, using only the materials you collected, with a shortage report and CSV export.
- **Full-screen tricks** — every monster performs its trick in a full-screen animation (16 tricks); each has a unique anchor link (`index.html#m-bocan`) and share buttons for WhatsApp, Telegram, Facebook, X, LinkedIn, Reddit and e-mail, with text, a preview image and a call to build more, similar copies.
- **Diplomas** — printable, with names or blank.
- **Album (v2.0.0)** — one printable sheet per participant (names from the Diplomas tab, monster from the Monsters tab): name, materials with quantities, sound (description + frequency) and code; 2 sheets per A4 page. "Export the Parade for FASCICUL" downloads `.fascicul.json` files (40 monsters per board, with names) that open in FASCICUL (Screen → 📂 Session) and are projected; with more than 40 monsters, several files are opened one after another.
- **Sounds and tunes** — every monster (and every generated one) roars and hums an original Halloween / Halo Fest tune; 4 'fierceness' levels matched to age (3–5, 6–9, 10–13, 14+).
- **3D** — a rotatable 3D model of every monster (WebGL, no libraries).
- **Educational game** — mixed quiz, memory and 'guess by sound' with the 50 monsters plus the generated ones.
- 8 languages, no tracking, no external requests, works offline, clean printing.

## Quick start

1. Open `index.html` in a browser (or the GitHub Pages site).
2. Pick a language, then enter the number of children and table seats in **Plan**.
3. Follow the 4-day checklist in **Plan** and tick off what you collect in **Materials**.
4. Print the cards and diplomas from **Monsters** and **Diplomas**.

## Publishing on GitHub Pages

1. Upload everything to a repo (e.g. `monstrarium`) and enable **Settings → Pages**.
2. For share previews the site address must match the one in the files (`https://chiuta.github.io/monstrarium/`). If it differs: `./set-site.sh https://your-address/`.
3. The `m/<lang>/<monster>.html` links carry a preview image and text and send visitors straight to the monster's animation. Generated monsters are shared with the anchor link (`#c=code`) and the PNG image made in the app.

## 👾 Catalog of the 50 monsters with the materials of each

→ [MONSTERS.md](MONSTERS.md)

## Privacy

No tracking, no accounts, no requests to external servers. Your settings and counters stay in your browser (localStorage).

## License

MIT — © 2026 Alexandru-Ionuț Chiuță (Alexio).

## Support the project

[☕ Buy Me a Coffee](https://buymeacoffee.com/echo.of.the.strings)
