// SPA ページ

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 300
  });
  const page = await browser.newPage();

  // Angular Material トップページを表示
  await page.setViewport({width: 1366, height: 768});
  await page.goto('https://material.angular.io/');

  // Get started ボタンをクリック
  await page.click('.docs-button.mat-raised-button');

  // キャプチャ
  await page.screenshot({path: 'example3-1.png'});

  await browser.close();
})();