# 👾 MONSTRARIUM

[Română](README.ro.md) · [English](README.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Atelier de monștri din materiale reciclate — planificator + bestiar cu 50 de monștri originali, într-un singur fișier HTML, offline.**

_Versiune: 2.0.0 · Ultima actualizare: 26.10.2026_

## Ce este

MONSTRARIUM calculează singur ce materiale reciclate trebuie strânse pentru un atelier de monștri cu cel puțin 50 de copii — nimeni nu îți dă materialele, iar organizatorul are doar 4 zile să le adune dintr-o zonă restrânsă. Prima pagină este o paradă a celor 50 de monștri.

## Funcții

- **Paradă** — prima pagină: toți monștrii în marș; atinge unul ca să-i vezi fișa.
- **Plan** — numărul de copii, serii la o singură masă, voluntari, saci de 120 L, drumuri cu mașina; listă de pregătire pe 4 zile.
- **Materiale** — listă cu cantități, înlocuitori (mod economic), contoare de strâns și mesaj gata de trimis pentru donatori.
- **Program** — fazele atelierului, serii pe o masă, zone, reguli de siguranță.
- **Bestiar** — 50 de monștri originali; la fiecare: materialele pe piese și totalul materialelor.
- **Monștri** — un monstru unic pentru fiecare copil, cu cartonașe de tipărit și lista de materiale.
- **Generator de monștri** — editor cu blocări (🔒), mutații, remix din Bestiar și cod partajabil; pentru toți copiii creează până la 500 de monștri, toți diferiți, pe dificultate sau timp, doar din materialele strânse, cu raport de lipsuri și export CSV.
- **Trucul în ecran complet** — fiecare monstru își face trucul într-o animație pe tot ecranul (16 trucuri); are link unic cu ancoră (`index.html#m-bocan`) și buton de distribuire pe WhatsApp, Telegram, Facebook, X, LinkedIn, Reddit, e-mail, cu text, imagine de previzualizare și îndemnul de a construi mai multe exemplare asemănătoare.
- **Diplome** — pentru tipărit, cu nume sau goale.
- **Album (v2.0.0)** — câte o fișă tipăribilă pentru fiecare participant (numele din fila Diplome, monstrul din fila Monștri): nume, materiale cu cantități, sunet (descriere + frecvență) și cod; 2 fișe pe pagină A4. „Exportă Parada pentru FASCICUL” descarcă fișiere `.fascicul.json` (40 de monștri pe tablă, cu numele) care se deschid în FASCICUL (Ecran → 📂 Sesiune) și se proiectează; peste 40 de monștri, mai multe fișiere, de deschis pe rând.
- **Sunete și melodii** — fiecare monstru (și cei generați) răgește și fredonează o melodie originală de Halloween / Halo Fest; 4 niveluri de «fioros» potrivite vârstei (3–5, 6–9, 10–13, 14+).
- **3D** — model 3D rotativ pentru fiecare monstru (WebGL, fără biblioteci).
- **Joc educațional** — quiz mixt, memorie și «ghicește după sunet» cu cei 50 de monștri plus cei generați.
- 8 limbi, fără urmărire, fără cereri externe, funcționează offline, tipărire curată.

## Pornire rapidă

1. Deschide `index.html` într-un browser (sau pagina publicată pe GitHub Pages).
2. Alege limba, apoi completează în **Plan** numărul de copii și locurile la masă.
3. Urmează lista pe 4 zile din **Plan** și bifează în **Materiale** ce ai strâns.
4. Tipărește cartonașele și diplomele din **Monștri** și **Diplome**.

## Publicare pe GitHub Pages

1. Încarcă tot conținutul într-un repo (de ex. `monstrarium`) și activează **Settings → Pages**.
2. Pentru previzualizări la distribuire, adresa site-ului trebuie să fie cea din fișiere (`https://chiuta.github.io/monstrarium/`). Dacă e alta: `./set-site.sh https://adresa-ta/`.
3. Linkurile `m/<limbă>/<monstru>.html` au imagine și text de previzualizare și te duc automat la animația monstrului. Monștrii generați se distribuie cu linkul cu ancoră (`#c=cod`) și cu imaginea PNG din aplicație.

## 👾 Catalogul celor 50 de monștri, cu materialele fiecăruia

→ [MONSTERS.ro.md](MONSTERS.ro.md)

## Confidențialitate

Nicio urmărire, niciun cont, nicio cerere către servere externe. Datele (setări, contoare) rămân în browserul tău (localStorage).

## Licență

MIT — © 2026 Alexandru-Ionuț Chiuță (Alexio).

## Susține proiectul

[☕ Buy Me a Coffee](https://buymeacoffee.com/echo.of.the.strings)
