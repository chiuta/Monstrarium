# Changelog

## 2.1.0 — 27.10.2026 (previous: 2.0.0)
- New: **materials safety sheet** (Schedule tab, printable with the Print button): glue, paint and markers, scissors, hot-glue gun and cutter, small parts, sticks and cut edges, bags and yarn, packaging, allergies and first aid; with a clear note that it is an indicative guide, not a certification. In 8 languages (automatic translations, not checked by native speakers).
- New: **recommended age** tag ("from 3 / 6 / 10 years") on every monster sheet (Bestiary and generated monsters), derived from the app's own difficulty-per-age-band rules (3–5 → easy, 6–9 → up to medium, 10–13 and 14+ → up to harder). Indicative.
- Documentation: "Status: stable · Offline: complete" in all READMEs; README sections on safety and age (EN, RO).
- The printable participant cards, diplomas and album sheets already existed (2.0.0).
- Not done: a safety review by a child-safety or occupational-safety expert; the content is the author's practical guidance.


## 2.0.0 — 26.10.2026
- Workshop album: a printable sheet per participant (name, materials, sound, code) and the Parade of all monsters exported for projection through FASCICUL (`.fascicul.json`, 40 monsters per board).

## 1.7.1 — 26.10.2026
- fff-kit 1.2.0: Transparency label (tap the version), `.fff.json` backup/restore, FFF.store. Saved settings migrate automatically from the old `monstrarium` key to `monstrarium.state`.
- Security: Content-Security-Policy now uses a script hash instead of `unsafe-inline`; `app.json` declares zero external requests.

## 1.7 — 26.10.2026
- Sounds: every monster (and generated ones) roars; an original hummed Halloween / Halo Fest tune per monster; 4 age levels of fierceness; Web Audio, fully offline.
- 3D: rotatable WebGL model of every monster (drag, pinch, wheel, keyboard).
- Educational game: mixed quiz, memory, guess-by-sound over the 50 monsters plus generated ones; age-adapted; best scores saved locally.

- Phone, tablet and desktop layouts; safe-area (notch) support; touch targets; Safari/iOS audio unlock; fullscreen fallbacks; PNG app icons for home-screen install.
- Every series has 10 children at the table (all age profiles).
- Materials plan corrected: per-child rates for egg cartons, yarn, corrugated card, tubes and sticks now cover real usage (verified with 288 scenarios, zero shortages); batch generator repairs shortages; "Complete card" opens scrolled to its top; two-step collection reset.
- Age selector adapts everything: difficulty, minutes per series, helpers ratio, seats, spare margin, game rounds/choices/pool, sounds, tune tempo, animation and 3D speed. Share button scrolls to the sharing area.
- Hardening: strict Content-Security-Policy (no network), sanitized saved settings, Back button closes the viewer, volume control, quiet-corner sound-safety rule, sound-free game fallback, WebGL context cleanup.
- Accessibility & standards: WCAG AA contrast in light and dark (automatically scanned), skip link, focus management and inert background in the viewer, forced-colors / prefers-contrast support, automatic 3D camera framing.

## 1.6
- Full-screen animation of every monster's trick (16 tricks); unique anchor links (#m-name, #c=code); share panel (WhatsApp, Telegram, Facebook, X, LinkedIn, Reddit, e-mail, native share, PNG image) with a call to build more similar copies; per-monster preview pages m/<lang>/<monster>.html with Open Graph images.

## 1.5
- Monster generator: editor with locks, mutation, Bestiary remix, shareable code; batch generator with maximal-variety selection (up to 500 distinct monsters), difficulty/time filters, collected-materials mode, shortage report, CSV export.

## 1.4
- Parade of all 50 monsters as the front page.
- Total materials listed for every monster (Bestiary and generated cards).
- READMEs and monster catalogs in 8 languages; MIT license; manifest + service worker for offline install.

## 1.3
- Bestiary grows to 50 original designs; new body shapes (ball, wide, segmented) and details (hat, eye stalks, fins, beard).

## 1.2
- 30-design bestiary, richer generator.

## 1.1
- Single table in series, 4-day collection plan, lean mode with substitutes.

## 1.0
- First release.
