// 画面操作

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 300
  });
  const page = await browser.newPage();

  // Google トップページを表示
  await page.setViewport({width: 1366, height: 768});
  await page.goto('https://www.google.co.jp/');

  // TOPGATE で検索
  await page.type('#lst-ib', 'TOPGATE');
  await page.click('.lsb');

  // キャプチャ
  await page.screenshot({path: 'example2-1.png'});

  await browser.close();
})();