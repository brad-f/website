const { expect } = require('chai');
const puppeteer = require('puppeteer');

const onError = (e) => console.error(e);

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080');
  await page.waitForSelector('h1');

  const headerText = await page.evaluate(() => {
    const headers = Array.from(document.querySelectorAll('h1'));
    return headers.map(header => header.textContent);
  });

  await page.screenshot({ path: 'example.png' });
  await browser.close();
  expect(headerText).to.be.eql([
    'brad fitzwater\'s experiments'
  ]);
};

main().catch(onError);
