# 👾 MONSTRARIUM

[Română](README.ro.md) · [English](README.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Laboratorio di mostri con materiali riciclati — pianificatore + bestiario di 50 mostri originali, in un unico file HTML offline.**

_Versione: 1.7.1 · Ultimo aggiornamento: 26.10.2026_

## Cos'è

MONSTRARIUM calcola da solo quali materiali riciclati raccogliere per un laboratorio di mostri con almeno 50 bambini — nessuno fornisce i materiali e l'organizzatore ha solo 4 giorni per raccoglierli in una zona locale ristretta. La prima pagina è una parata dei 50 mostri.

## Funzioni

- **Parata** — pagina iniziale: tutti i mostri in marcia; tocca un mostro per aprire la sua scheda.
- **Piano** — numero di bambini, turni a un solo tavolo, aiutanti, sacchi da 120 L, viaggi in auto; lista di preparazione in 4 giorni.
- **Materiali** — quantità, sostituti (modalità essenziale), contatori di raccolta e messaggio pronto per i donatori.
- **Programma** — fasi del laboratorio, turni su un tavolo, zone, regole di sicurezza.
- **Bestiario** — 50 mostri originali; ognuno elenca i pezzi e il totale dei materiali.
- **Mostri** — un mostro unico per ogni bambino, cartoncini stampabili con elenco dei materiali.
- **Generatore di mostri** — editor con blocchi (🔒), mutazioni, remix dal Bestiario e codice condivisibile; per tutti i bambini crea fino a 500 mostri diversi, per difficoltà o tempo, usando solo i materiali raccolti, con rapporto delle mancanze ed esportazione CSV.
- **Trucchi a schermo intero** — ogni mostro esegue il suo trucco in un'animazione a schermo intero (16 trucchi); ognuno ha un link unico con ancora (`index.html#m-bocan`) e pulsanti di condivisione per WhatsApp, Telegram, Facebook, X, LinkedIn, Reddit ed e-mail, con testo, immagine di anteprima e l'invito a costruirne altri, simili.
- **Diplomi** — stampabili, con nomi o in bianco.
- **Suoni e melodie** — ogni mostro (anche quelli generati) ruggisce e canticchia una melodia originale di Halloween / Halo Fest; 4 livelli di ferocia in base all'età (3–5, 6–9, 10–13, 14+).
- **3D** — un modello 3D girevole per ogni mostro (WebGL, senza librerie).
- **Gioco educativo** — quiz misto, memory e «indovina dal suono» con i 50 mostri più quelli generati.
- 8 lingue, nessun tracciamento, nessuna richiesta esterna, funziona offline, stampa pulita.

## Avvio rapido

1. Apri `index.html` in un browser (o il sito GitHub Pages).
2. Scegli la lingua, poi inserisci in **Piano** il numero di bambini e i posti al tavolo.
3. Segui la lista in 4 giorni in **Piano** e spunta in **Materiali** ciò che hai raccolto.
4. Stampa i cartoncini e i diplomi da **Mostri** e **Diplomi**.

## Pubblicazione su GitHub Pages

1. Carica tutto in un repository (es. `monstrarium`) e attiva **Settings → Pages**.
2. Per le anteprime di condivisione l'indirizzo del sito deve coincidere con quello nei file (`https://chiuta.github.io/monstrarium/`). Altrimenti: `./set-site.sh https://tuo-indirizzo/`.
3. I link `m/<lingua>/<mostro>.html` hanno immagine e testo di anteprima e portano direttamente all'animazione del mostro. I mostri generati si condividono con il link con ancora (`#c=codice`) e l'immagine PNG creata nell'app.

## 👾 Catalogo dei 50 mostri con i materiali di ciascuno

→ [MONSTERS.it.md](MONSTERS.it.md)

## Privacy

Nessun tracciamento, nessun account, nessuna richiesta a server esterni. Impostazioni e contatori restano nel tuo browser (localStorage).

## Licenza

MIT — © 2026 Alexandru-Ionuț Chiuță (Alexio).

## Sostieni il progetto

[☕ Buy Me a Coffee](https://buymeacoffee.com/echo.of.the.strings)
