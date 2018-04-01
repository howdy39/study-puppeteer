// キャプチャ（画面サイズ変更）

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 300
  });
  const page = await browser.newPage();

  // Full HD のキャプチャ
  await page.setViewport({width: 1920, height: 1080});
  await page.goto('https://www.topgate.co.jp/');
  await page.screenshot({path: 'example1-1.png'});

  // 全画面にしたときのキャプチャ
  await page.screenshot({path: 'example1-2.png', fullPage: true});

  // iPhone 8 のキャプチャ
  await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) CriOS/61.0.3163.73 Mobile/15A372 Safari/602.1');
  await page.setViewport({width: 375, height: 667});
  await page.screenshot({path: 'example1-3.png'});

  await browser.close();
})();