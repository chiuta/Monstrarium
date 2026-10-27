# 👾 MONSTRARIUM

[Română](README.ro.md) · [English](README.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Taller de monstruos con materiales reciclados — planificador + bestiario de 50 monstruos originales, en un único archivo HTML sin conexión.**

_Versión: 2.1.0 · Última actualización: 27.10.2026_

_Estado: estable · Sin conexión: completo_

## Qué es

MONSTRARIUM calcula por sí solo qué materiales reciclados hay que reunir para un taller de monstruos con al menos 50 niños — nadie aporta los materiales y el organizador solo tiene 4 días para reunirlos en una zona local reducida. La primera página es un desfile de los 50 monstruos.

## Funciones

- **Desfile** — página de inicio: todos los monstruos marchando; toca uno para abrir su ficha.
- **Plan** — número de niños, turnos en una sola mesa, ayudantes, bolsas de 120 L, viajes en coche; lista de preparación de 4 días.
- **Materiales** — cantidades, sustitutos (modo austero), contadores de recogida y mensaje listo para enviar a los donantes.
- **Programa** — fases del taller, turnos en una mesa, zonas, normas de seguridad.
- **Bestiario** — 50 monstruos originales; cada uno indica sus piezas y el total de materiales.
- **Monstruos** — un monstruo único para cada niño, tarjetas imprimibles con la lista de materiales.
- **Generador de monstruos** — editor con bloqueos (🔒), mutaciones, remix del Bestiario y código compartible; para todos los niños crea hasta 500 monstruos distintos, por dificultad o tiempo, usando solo los materiales reunidos, con informe de faltantes y exportación CSV.
- **Trucos a pantalla completa** — cada monstruo hace su truco en una animación a pantalla completa (16 trucos); cada uno tiene un enlace único con ancla (`index.html#m-bocan`) y botones para compartir en WhatsApp, Telegram, Facebook, X, LinkedIn, Reddit y correo, con texto, imagen de vista previa y la invitación a construir más ejemplares parecidos.
- **Diplomas** — imprimibles, con nombre o en blanco.
- **Sonidos y melodías** — cada monstruo (y los generados) ruge y tararea una melodía original de Halloween / Halo Fest; 4 niveles de ferocidad según la edad (3–5, 6–9, 10–13, 14+).
- **3D** — un modelo 3D giratorio de cada monstruo (WebGL, sin librerías).
- **Juego educativo** — quiz mixto, memoria y «adivina por el sonido» con los 50 monstruos y los generados.
- 8 idiomas, sin rastreo, sin peticiones externas, funciona sin conexión, impresión limpia.

## Inicio rápido

1. Abre `index.html` en un navegador (o el sitio de GitHub Pages).
2. Elige el idioma y en **Plan** indica el número de niños y de plazas en la mesa.
3. Sigue la lista de 4 días en **Plan** y marca en **Materiales** lo que vayas reuniendo.
4. Imprime las tarjetas y los diplomas desde **Monstruos** y **Diplomas**.

## Publicación en GitHub Pages

1. Sube todo a un repositorio (p. ej. `monstrarium`) y activa **Settings → Pages**.
2. Para las vistas previas al compartir, la dirección del sitio debe coincidir con la de los archivos (`https://chiuta.github.io/monstrarium/`). Si es otra: `./set-site.sh https://tu-direccion/`.
3. Los enlaces `m/<idioma>/<monstruo>.html` llevan imagen y texto de vista previa y envían directamente a la animación del monstruo. Los monstruos generados se comparten con el enlace con ancla (`#c=código`) y la imagen PNG creada en la aplicación.

## 👾 Catálogo de los 50 monstruos con los materiales de cada uno

→ [MONSTERS.es.md](MONSTERS.es.md)

## Privacidad

Sin rastreo, sin cuentas, sin peticiones a servidores externos. Tus ajustes y contadores se quedan en tu navegador (localStorage).

## Licencia

MIT — © 2026 Alexandru-Ionuț Chiuță (Alexio).

## Apoya el proyecto

[☕ Buy Me a Coffee](https://buymeacoffee.com/echo.of.the.strings)
