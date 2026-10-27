// MONSTRARIUM 2.1 — Fișa de siguranță a materialelor (fila Program) și vârsta recomandată pe fișele monștrilor.
import {launch, check, summary} from "./_lib.mjs";

const {browser, page, st} = await launch();
const LANGS = ["ro", "en", "fr", "it", "es", "pt", "de", "hu"];
console.log("1. fișa de siguranță, în toate limbile");
for (const l of LANGS) {
  await page.goto(page.url().split("?")[0] + "?lang=" + l);
  await page.waitForSelector("#tabs button");
  await page.click('#tabs button[data-v="prog"]');
  await page.waitForSelector("#msafe");
  const items = await page.locator("#msafe li").count();
  const bold = await page.locator("#msafe li b").count();
  const txt = await page.locator("#msafe").innerText();
  check(l + ": 8 puncte, fiecare cu titlu îngroșat, notă de neaudit", items === 8 && bold === 8 && txt.length > 800, {items, bold, len: txt.length});
  check(l + ": fără chei netraduse", !/\b(ms\d|h_msafe|ms_note|age_note|age_from)\b/.test(txt), txt.slice(0, 80));
}
console.log("2. vârsta recomandată pe fișele monștrilor");
await page.goto(page.url().split("?")[0] + "?lang=ro");
await page.waitForSelector("#tabs button");
await page.click('#tabs button[data-v="bes"]');
await page.waitForSelector("#v-bes .card");
const tags = await page.locator("#v-bes .card .tag").allInnerTexts();
const ages = tags.filter(x => /Vârstă recomandată: de la (3|6|10) ani/.test(x));
check("fiecare monstru din Bestiar are eticheta de vârstă", ages.length === (await page.locator("#v-bes .card").count()), {ages: ages.length});
const first = await page.locator("#v-bes .card").first().innerText();
check("dificultate ușoară => de la 3 ani", /ușor/.test(first) ? /de la 3 ani/.test(first) : true, first.slice(0, 120));
check("fără erori de pagină", st.errs.length === 0, st.errs);
check("0 cereri de rețea", st.net.length === 0, st.net);
await browser.close();
summary();
