const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 2 });

  const filePath = 'file:///' + path.resolve(__dirname, 'thumbnail.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  await page.screenshot({
    path: path.join(__dirname, 'thumbnail.png'),
    clip: { x: 0, y: 0, width: 1280, height: 720 }
  });

  await browser.close();
  console.log('thumbnail.png saved!');
})();
