# 👾 MONSTRARIUM

[Română](README.ro.md) · [English](README.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Monster-Werkstatt aus Recyclingmaterial — Planer + Bestiarium mit 50 originellen Monstern, in einer einzigen Offline-HTML-Datei.**

_Version: 1.7 · Zuletzt aktualisiert: 26.10.2026_

## Was ist das?

MONSTRARIUM berechnet selbst, welche Recyclingmaterialien für eine Monster-Werkstatt mit mindestens 50 Kindern gesammelt werden müssen — niemand stellt das Material, und die Organisatorin bzw. der Organisator hat nur 4 Tage, es in einem kleinen örtlichen Umkreis zusammenzutragen. Die Startseite ist eine Parade aller 50 Monster.

## Funktionen

- **Parade** — Startseite: alle Monster im Marsch; antippen öffnet das Steckbrief-Blatt.
- **Planung** — Kinderzahl, Durchgänge an einem einzigen Tisch, Helfer, 120-L-Säcke, Autofahrten; 4-Tage-Checkliste.
- **Material** — Mengen, Ersatzstoffe (Sparmodus), Sammelzähler und eine fertige Nachricht an Spender.
- **Ablauf** — Phasen der Werkstatt, Durchgänge an einem Tisch, Zonen, Sicherheitsregeln.
- **Bestiarium** — 50 originelle Monster; jedes nennt seine Teile und das gesamte Material.
- **Monster** — ein einzigartiges Monster für jedes Kind, druckbare Karten mit Materialliste.
- **Monster-Generator** — Editor mit Sperren (🔒), Mutationen, Bestiarium-Remixes und teilbarem Code; für alle Kinder entstehen bis zu 500 verschiedene Monster, nach Schwierigkeit oder Zeit, nur aus dem gesammelten Material, mit Fehlbedarf-Bericht und CSV-Export.
- **Tricks im Vollbild** — jedes Monster führt seinen Trick als Vollbild-Animation vor (16 Tricks); jedes hat einen eindeutigen Ankerlink (`index.html#m-bocan`) und Teilen-Buttons für WhatsApp, Telegram, Facebook, X, LinkedIn, Reddit und E-Mail, mit Text, Vorschaubild und der Aufforderung, weitere ähnliche Exemplare zu bauen.
- **Urkunden** — druckbar, mit Namen oder leer.
- **Klänge und Melodien** — jedes Monster (auch die erzeugten) brüllt und summt eine eigene Halloween- / Halo-Fest-Melodie; 4 Wildheitsstufen nach Alter (3–5, 6–9, 10–13, 14+).
- **3D** — ein drehbares 3D-Modell für jedes Monster (WebGL, ohne Bibliotheken).
- **Lernspiel** — gemischtes Quiz, Memory und „Rate am Klang“ mit den 50 Monstern plus den erzeugten.
- 8 Sprachen, kein Tracking, keine externen Anfragen, funktioniert offline, sauberer Druck.

## Schnellstart

1. Öffne `index.html` im Browser (oder die GitHub-Pages-Seite).
2. Wähle die Sprache und gib unter **Planung** Kinderzahl und Tischplätze ein.
3. Folge der 4-Tage-Checkliste unter **Planung** und hake unter **Material** Gesammeltes ab.
4. Drucke Karten und Urkunden unter **Monster** und **Urkunden**.

## Veröffentlichung auf GitHub Pages

1. Alles in ein Repository hochladen (z. B. `monstrarium`) und **Settings → Pages** aktivieren.
2. Für Vorschauen beim Teilen muss die Website-Adresse mit der in den Dateien übereinstimmen (`https://chiuta.github.io/monstrarium/`). Andernfalls: `./set-site.sh https://deine-adresse/`.
3. Die Links `m/<Sprache>/<Monster>.html` liefern Vorschaubild und -text und führen direkt zur Animation des Monsters. Generierte Monster werden mit dem Ankerlink (`#c=Code`) und dem in der App erzeugten PNG-Bild geteilt.

## 👾 Katalog der 50 Monster mit dem Material jedes Monsters

→ [MONSTERS.de.md](MONSTERS.de.md)

## Datenschutz

Kein Tracking, keine Konten, keine Anfragen an externe Server. Einstellungen und Zähler bleiben in deinem Browser (localStorage).

## Lizenz

MIT — © 2026 Alexandru-Ionuț Chiuță (Alexio).

## Projekt unterstützen

[☕ Buy Me a Coffee](https://buymeacoffee.com/echo.of.the.strings)
