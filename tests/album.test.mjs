// MONSTRARIUM 2.0 — Albumul atelierului: fișe tipăribile și Parada pentru FASCICUL.
import fs from "fs";
import path from "path";
import {launch, INDEX, check, summary} from "./_lib.mjs";

const {browser, page, st, ctx} = await launch();
await page.goto("file://" + INDEX + "?lang=ro");
await page.waitForSelector("#tabs button");
console.log("1. fișele");
check("fila Album există", (await page.locator('#tabs button[data-v="alb"]').count()) === 1);
await page.click('#tabs button[data-v="dip"]');
await page.fill("#f_names", "Ana Pop\nBogdan Ilie\nCiprian <b>X</b>");
await page.waitForTimeout(500);
await page.click('#tabs button[data-v="alb"]');
await page.waitForSelector(".alb");
check("câte o fișă per nume (3)", (await page.locator(".alb").count()) === 3);
const t0 = await page.locator(".alb").nth(0).innerText();
check("fișa conține numele participantului, materiale, sunet, cod", /Ana Pop/.test(t0) && /Materiale:/.test(t0) && /Sunet:/.test(t0) && /Cod monstru:/.test(t0), t0);
check("fiecare fișă are monstrul (svg) și un nume de monstru", (await page.locator(".alb svg").count()) === 3 && (await page.locator(".alb h4").first().innerText()).length > 1);
check("materialele sunt de forma „N× material”", /\d+× \S/.test(await page.locator(".alb .cr").nth(0).innerText()));
check("numele sunt escapate (fără HTML injectat)", (await page.locator(".alb .who b").count()) === 0 && (await page.locator(".alb .who").nth(2).innerText()).includes("<b>X</b>"));
const names = await page.locator(".alb h4").allInnerTexts();
check("monștrii participanților sunt diferiți", new Set(names).size === 3, names);
// aceeași ordine și monștri ca în fila Monștri (batch)
await page.click('#tabs button[data-v="mon"]');
await page.click("#allBtn");
await page.waitForSelector("#allCards .card");
const m1 = await page.locator("#allCards .card h4").first().innerText();
check("primul monstru din album = primul din fila Monștri", m1 === names[0], [m1, names[0]]);
// imprimare: fișele se tipăresc, panoul nu
await page.click('#tabs button[data-v="alb"]');
await page.emulateMedia({media: "print"});
const pv = await page.evaluate(() => ({panel: getComputedStyle(document.querySelector("#v-alb .panel")).display, alb: getComputedStyle(document.querySelector(".alb")).display, h: document.querySelector(".alb").getBoundingClientRect().height}));
check("tipărire: panoul ascuns, fișa vizibilă", pv.panel === "none" && pv.alb !== "none" && pv.h > 300, pv);
await page.emulateMedia({media: "screen"});
const ov = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
check("fără scroll orizontal", ov <= 1, ov);

console.log("2. Parada pentru FASCICUL");
// 50 de copii fără nume -> 50 de fișe, 2 fișiere (40 + 10)
await page.click('#tabs button[data-v="dip"]');
await page.fill("#f_names", ""); await page.waitForTimeout(400);
await page.click('#tabs button[data-v="alb"]');
const kids = await page.locator(".alb").count();
check("fără nume: o fișă per copil (S.kids)", kids === 50, kids);
const files = [];
page.on("download", async d => { const p = await d.path(); files.push({name: d.suggestedFilename(), txt: fs.readFileSync(p, "utf8")}); });
await page.click("#albPar");
await page.waitForFunction(() => /fișier/.test(document.getElementById("albMsg").textContent), null, {timeout: 60000});
await page.waitForTimeout(500);
check("2 fișiere descărcate (40 + 10)", files.length === 2 && /parada-1-din-2/.test(files[0].name), files.map(f => f.name));
const J = files.map(f => JSON.parse(f.txt));
check("format FASCICUL: fascicul=1, theme, objs", J.every(j => j.fascicul === 1 && j.theme === "dark" && Array.isArray(j.objs)));
check("primul: o notă + 40 de imagini; al doilea: o notă + 10", J[0].objs.length === 41 && J[1].objs.length === 11, J.map(j => j.objs.length));
const imgs = J[0].objs.filter(o => o.k === "i");
check("imaginile sunt data URL png/jpeg ≤ 600000 caractere, id-uri valide", imgs.every(o => /^data:image\/(png|jpeg);base64,[A-Za-z0-9+\/=]+$/.test(o.d) && o.d.length <= 600000 && /^[A-Za-z0-9_-]{1,24}$/.test(o.id)));
check("imaginile încap pe tablă 1600×900", imgs.every(o => o.x >= 0 && o.y >= 0 && o.x + o.w <= 1600 && o.y + o.h <= 900));
check("nota are titlu cu intervalul", /1–40 din 50/.test(J[0].objs[0].t) && /41–50 din 50/.test(J[1].objs[0].t), J[0].objs[0].t);
// imaginea e un PNG real
const dim = await page.evaluate(async d => { const i = new Image(); i.src = d; await i.decode(); return [i.naturalWidth, i.naturalHeight]; }, imgs[0].d);
check("o imagine se decodează (380×284)", dim[0] === 380 && dim[1] === 284, dim);
// interoperabilitate reală cu FASCICUL, dacă depozitul e alături
const fasc = path.resolve(path.dirname(INDEX), "..", "FASCICUL", "index.html");
if (fs.existsSync(fasc)) {
  const p2 = await ctx.newPage();
  await p2.addInitScript(() => { try { localStorage.setItem("fsc_lang", "ro"); } catch (e) {} });
  await p2.goto("file://" + fasc);
  await p2.click("#goHost"); await p2.waitForSelector("#board.on");
  await p2.evaluate(() => document.querySelectorAll(".modal.on").forEach(m => m.classList.remove("on")));
  const f0 = path.join(path.dirname(INDEX), "tests", ".parada-test.json");
  fs.writeFileSync(f0, files[0].txt);
  await p2.setInputFiles("#fj", f0);
  await p2.waitForFunction(() => /\b4[01]\b/.test(document.getElementById("toast").textContent), null, {timeout: 20000}).catch(() => {});
  const tt = await p2.textContent("#toast");
  check("FASCICUL încarcă Parada (toast cu 41 de obiecte)", /41/.test(tt), tt);
  fs.unlinkSync(f0);
}
check("fără erori și fără rețea", st.errs.length === 0 && st.net.length === 0, [st.errs, st.net]);
await browser.close();
summary();
