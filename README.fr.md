# 👾 MONSTRARIUM

[Română](README.ro.md) · [English](README.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Atelier de monstres en matériaux recyclés — planificateur + bestiaire de 50 monstres originaux, dans un seul fichier HTML hors ligne.**

_Version: 2.1.0 · Dernière mise à jour: 27.10.2026_

_État: stable · Hors ligne: complet_

## Présentation

MONSTRARIUM calcule lui-même les matériaux recyclés à collecter pour un atelier de monstres avec au moins 50 enfants — personne ne fournit le matériel, et l'organisateur n'a que 4 jours pour le réunir dans un petit périmètre local. La première page est un défilé des 50 monstres.

## Fonctions

- **Défilé** — page d'accueil : tous les monstres en marche ; touchez-en un pour ouvrir sa fiche.
- **Plan** — nombre d'enfants, séries autour d'une seule table, aides, sacs de 120 L, trajets en voiture ; liste de préparation sur 4 jours.
- **Matériaux** — quantités, substituts (mode économe), compteurs de collecte et message prêt à envoyer aux donateurs.
- **Programme** — phases de l'atelier, séries sur une table, zones, consignes de sécurité.
- **Bestiaire** — 50 monstres originaux ; chacun indique ses pièces et le total des matériaux.
- **Monstres** — un monstre unique pour chaque enfant, cartes imprimables avec la liste des matériaux.
- **Générateur de monstres** — éditeur avec verrous (🔒), mutations, remix du Bestiaire et code partageable ; pour tous les enfants il crée jusqu'à 500 monstres différents, selon la difficulté ou le temps, avec seulement les matériaux collectés, rapport des manques et export CSV.
- **Astuces en plein écran** — chaque monstre exécute son astuce dans une animation plein écran (16 astuces) ; chacun a un lien unique avec ancre (`index.html#m-bocan`) et des boutons de partage vers WhatsApp, Telegram, Facebook, X, LinkedIn, Reddit et e-mail, avec texte, image d'aperçu et l'invitation à en construire d'autres, semblables.
- **Diplômes** — imprimables, nominatifs ou vierges.
- **Sons et mélodies** — chaque monstre (et chaque monstre généré) rugit et fredonne une mélodie originale d'Halloween / Halo Fest ; 4 niveaux de férocité selon l'âge (3–5, 6–9, 10–13, 14+).
- **3D** — un modèle 3D rotatif pour chaque monstre (WebGL, sans bibliothèque).
- **Jeu éducatif** — quiz mixte, mémoire et « devine au son » avec les 50 monstres et les monstres générés.
- 8 langues, sans pistage, sans requête externe, fonctionne hors ligne, impression propre.

## Démarrage rapide

1. Ouvrez `index.html` dans un navigateur (ou le site GitHub Pages).
2. Choisissez la langue, puis saisissez le nombre d'enfants et de places à table dans **Plan**.
3. Suivez la liste sur 4 jours dans **Plan** et cochez dans **Matériaux** ce que vous avez collecté.
4. Imprimez les cartes et les diplômes depuis **Monstres** et **Diplômes**.

## Publication sur GitHub Pages

1. Téléversez tout dans un dépôt (par ex. `monstrarium`) et activez **Settings → Pages**.
2. Pour les aperçus de partage, l'adresse du site doit correspondre à celle des fichiers (`https://chiuta.github.io/monstrarium/`). Sinon : `./set-site.sh https://votre-adresse/`.
3. Les liens `m/<langue>/<monstre>.html` portent une image et un texte d'aperçu et envoient directement à l'animation du monstre. Les monstres générés se partagent avec le lien à ancre (`#c=code`) et l'image PNG créée dans l'application.

## 👾 Catalogue des 50 monstres avec les matériaux de chacun

→ [MONSTERS.fr.md](MONSTERS.fr.md)

## Confidentialité

Aucun pistage, aucun compte, aucune requête vers des serveurs externes. Vos réglages et compteurs restent dans votre navigateur (localStorage).

## Licence

MIT — © 2026 Alexandru-Ionuț Chiuță (Alexio).

## Soutenir le projet

[☕ Buy Me a Coffee](https://buymeacoffee.com/echo.of.the.strings)
