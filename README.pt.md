# 👾 MONSTRARIUM

[Română](README.ro.md) · [English](README.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Oficina de monstros com materiais reciclados — planeador + bestiário de 50 monstros originais, num único ficheiro HTML offline.**

_Versão: 2.0.0 · Última atualização: 26.10.2026_

## O que é

O MONSTRARIUM calcula sozinho que materiais reciclados é preciso reunir para uma oficina de monstros com pelo menos 50 crianças — ninguém fornece os materiais e o organizador tem apenas 4 dias para os juntar numa zona local restrita. A primeira página é um desfile dos 50 monstros.

## Funcionalidades

- **Desfile** — página inicial: todos os monstros a marchar; toque num para abrir a sua ficha.
- **Plano** — número de crianças, turnos numa só mesa, ajudantes, sacos de 120 L, viagens de carro; lista de preparação a 4 dias.
- **Materiais** — quantidades, substitutos (modo económico), contadores de recolha e mensagem pronta a enviar aos doadores.
- **Programa** — fases da oficina, turnos numa mesa, zonas, regras de segurança.
- **Bestiário** — 50 monstros originais; cada um indica as suas peças e o total de materiais.
- **Monstros** — um monstro único para cada criança, cartões imprimíveis com a lista de materiais.
- **Gerador de monstros** — editor com bloqueios (🔒), mutações, remix do Bestiário e código partilhável; para todas as crianças cria até 500 monstros diferentes, por dificuldade ou tempo, usando só os materiais reunidos, com relatório de faltas e exportação CSV.
- **Truques em ecrã inteiro** — cada monstro faz o seu truque numa animação em ecrã inteiro (16 truques); cada um tem um link único com âncora (`index.html#m-bocan`) e botões de partilha para WhatsApp, Telegram, Facebook, X, LinkedIn, Reddit e e-mail, com texto, imagem de pré-visualização e o convite para construir mais exemplares parecidos.
- **Diplomas** — imprimíveis, com nomes ou em branco.
- **Sons e melodias** — cada monstro (e os gerados) ruge e trauteia uma melodia original de Halloween / Halo Fest; 4 níveis de ferocidade conforme a idade (3–5, 6–9, 10–13, 14+).
- **3D** — um modelo 3D rotativo de cada monstro (WebGL, sem bibliotecas).
- **Jogo educativo** — quiz misto, memória e «adivinhe pelo som» com os 50 monstros e os gerados.
- 8 línguas, sem rastreio, sem pedidos externos, funciona offline, impressão limpa.

## Início rápido

1. Abra `index.html` num navegador (ou o site do GitHub Pages).
2. Escolha a língua e indique em **Plano** o número de crianças e de lugares à mesa.
3. Siga a lista de 4 dias em **Plano** e marque em **Materiais** o que for reunindo.
4. Imprima os cartões e os diplomas em **Monstros** e **Diplomas**.

## Publicação no GitHub Pages

1. Carregue tudo num repositório (p. ex. `monstrarium`) e ative **Settings → Pages**.
2. Para as pré-visualizações ao partilhar, o endereço do site deve coincidir com o dos ficheiros (`https://chiuta.github.io/monstrarium/`). Se for outro: `./set-site.sh https://seu-endereco/`.
3. Os links `m/<língua>/<monstro>.html` trazem imagem e texto de pré-visualização e levam diretamente à animação do monstro. Os monstros gerados partilham-se com o link com âncora (`#c=código`) e a imagem PNG criada na aplicação.

## 👾 Catálogo dos 50 monstros com os materiais de cada um

→ [MONSTERS.pt.md](MONSTERS.pt.md)

## Privacidade

Sem rastreio, sem contas, sem pedidos a servidores externos. As definições e os contadores ficam no seu navegador (localStorage).

## Licença

MIT — © 2026 Alexandru-Ionuț Chiuță (Alexio).

## Apoie o projeto

[☕ Buy Me a Coffee](https://buymeacoffee.com/echo.of.the.strings)
