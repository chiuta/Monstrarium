// MONSTRARIUM 2.2 — foi goale de tipărit: foaie de prezență și buletin de vot (fila Album)
import {launch, check, summary} from "./_lib.mjs";
const LANGS = ["ro", "en", "fr", "it", "es", "pt", "de", "hu"];
const {browser, page, st} = await launch();
const url0 = page.url().split("?")[0];
for (const l of LANGS) {
  await page.goto(url0 + "?lang=" + l);
  await page.waitForSelector("#tabs button");
  await page.click('#tabs button[data-v="alb"]');
  await page.waitForSelector("#shPanel");
  await page.evaluate(() => { window.print = () => { window.__ps = document.body.dataset.ps; window.__txt = document.getElementById("psheets").innerText; }; });
  await page.click('[data-act="shatt"]');
  const a = await page.evaluate(() => ({ps: window.__ps, txt: window.__txt, rows: document.querySelectorAll("#psheets tbody tr").length}));
  check(l + ": foaia de prezență are cap de tabel și cel puțin 12 rânduri", a.ps === "att" && a.rows >= 12 && !/\bsh_[a-z0-9]+\b/.test(a.txt), {ps: a.ps, rows: a.rows});
  await page.evaluate(() => { document.body.dispatchEvent(new Event("x")); window.dispatchEvent(new Event("afterprint")); });
  check(l + ": după tipărire foaia dispare", await page.evaluate(() => document.body.dataset.ps === undefined && document.getElementById("psheets").innerHTML === ""));
  await page.click('[data-act="shvote"]');
  const v = await page.evaluate(() => ({ps: window.__ps, txt: window.__txt, cats: document.querySelectorAll("#psheets tbody tr").length, mons: document.querySelectorAll("#psheets li").length}));
  check(l + ": buletinul de vot are 5 categorii și lista monștrilor", v.ps === "vote" && v.cats === 5 && v.mons >= 1 && !/\bsh_[a-z0-9]+\b/.test(v.txt), v);
  await page.evaluate(() => window.dispatchEvent(new Event("afterprint")));
}
// în modul de tipărire se vede doar foaia
await page.goto(url0 + "?lang=ro");
await page.waitForSelector("#tabs button");
await page.click('#tabs button[data-v="alb"]');
await page.evaluate(() => { window.print = () => {}; });
await page.click('[data-act="shatt"]');
await page.emulateMedia({media: "print"});
check("la tipărire: foaia vizibilă", await page.isVisible("#psheets"));
check("la tipărire: restul aplicației ascuns", !(await page.isVisible("main")) && !(await page.isVisible("header")));
await page.emulateMedia({media: "screen"});
check("pe ecran: foaia ascunsă", !(await page.isVisible("#psheets")));
check("fără erori de pagină", st.errs.length === 0, st.errs);
check("0 cereri de rețea", st.net.length === 0, st.net);
await browser.close(); summary();
