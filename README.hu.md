# 👾 MONSTRARIUM

[Română](README.ro.md) · [English](README.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Szörnyműhely újrahasznosított anyagokból — tervező + 50 eredeti szörny bestiáriuma, egyetlen offline HTML-fájlban.**

_Verzió: 1.7.1 · Utolsó frissítés: 26.10.2026_

## Mi ez?

A MONSTRARIUM maga számolja ki, milyen újrahasznosított anyagokat kell összegyűjteni egy legalább 50 gyerekes szörnyműhelyhez — az anyagot senki nem adja, a szervezőnek pedig csak 4 napja van összegyűjteni egy szűk helyi körzetből. A nyitóoldal mind az 50 szörny felvonulása.

## Funkciók

- **Felvonulás** — nyitóoldal: az összes szörny menetel; koppints egyre, és megnyílik a lapja.
- **Terv** — gyerekek száma, turnusok egyetlen asztalnál, segítők, 120 literes zsákok, autós fordulók; 4 napos előkészítési lista.
- **Anyagok** — mennyiségek, helyettesítők (takarékos mód), gyűjtésszámlálók és kész adományozói üzenet.
- **Program** — a műhely szakaszai, turnusok egy asztalnál, zónák, biztonsági szabályok.
- **Bestiárium** — 50 eredeti szörny; mindegyiknél az alkatrészek és az anyagok összesítése.
- **Szörnyek** — minden gyereknek egyedi szörny, nyomtatható kártyák anyaglistával.
- **Szörnygenerátor** — szerkesztő zárolásokkal (🔒), mutációkkal, Bestiárium-remixekkel és megosztható kóddal; az összes gyereknek akár 500 különböző szörnyet készít nehézség vagy idő szerint, csak az összegyűjtött anyagokból, hiánylistával és CSV-exporttal.
- **Trükkök teljes képernyőn** — minden szörny teljes képernyős animációban mutatja be a trükkjét (16 trükk); mindegyiknek egyedi horgonylinkje van (`index.html#m-bocan`), valamint megosztógombok a WhatsApp, Telegram, Facebook, X, LinkedIn, Reddit és e-mail felé, szöveggel, előnézeti képpel és azzal a felhívással, hogy építs még több hasonló példányt.
- **Oklevelek** — nyomtathatók, névvel vagy üresen.
- **Hangok és dallamok** — minden szörny (a generáltak is) ordít és dúdol egy eredeti Halloween / Halo Fest dallamot; 4 vadsági szint kor szerint (3–5, 6–9, 10–13, 14+).
- **3D** — minden szörnyhöz forgatható 3D modell (WebGL, könyvtárak nélkül).
- **Tanulójáték** — vegyes kvíz, memória és „találd ki a hangból” az 50 szörnnyel és a generáltakkal.
- 8 nyelv, követés nélkül, külső kérések nélkül, offline működik, tiszta nyomtatás.

## Gyorsindítás

1. Nyisd meg az `index.html` fájlt böngészőben (vagy a GitHub Pages oldalt).
2. Válassz nyelvet, majd a **Terv** lapon add meg a gyerekek számát és az asztalnál lévő helyeket.
3. Kövesd a **Terv** lap 4 napos listáját, és az **Anyagok** lapon pipáld ki, amit összegyűjtöttél.
4. Nyomtasd ki a kártyákat és az okleveleket a **Szörnyek** és az **Oklevelek** lapról.

## Közzététel GitHub Pages-en

1. Töltsd fel az egészet egy tárolóba (pl. `monstrarium`), és kapcsold be a **Settings → Pages** menüt.
2. A megosztási előnézetekhez az oldal címének egyeznie kell a fájlokban lévővel (`https://chiuta.github.io/monstrarium/`). Ha más: `./set-site.sh https://a-te-cimed/`.
3. Az `m/<nyelv>/<szörny>.html` linkek előnézeti képet és szöveget hordoznak, és közvetlenül a szörny animációjához visznek. A generált szörnyeket a horgonylinkkel (`#c=kód`) és az alkalmazásban készített PNG-képpel oszd meg.

## 👾 Az 50 szörny katalógusa, mindegyik anyagaival

→ [MONSTERS.hu.md](MONSTERS.hu.md)

## Adatvédelem

Nincs követés, nincs fiók, nincs kérés külső szerverekre. A beállítások és a számlálók a böngésződben maradnak (localStorage).

## Licenc

MIT — © 2026 Alexandru-Ionuț Chiuță (Alexio).

## Támogasd a projektet

[☕ Buy Me a Coffee](https://buymeacoffee.com/echo.of.the.strings)
