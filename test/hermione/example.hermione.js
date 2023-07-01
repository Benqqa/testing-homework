const { assert } = require("chai");

describe("store", async function () {
  it("Тест, который пройдет2", async function ({ browser }) {
    await browser.setWindowSize(1920, 1080);
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store");
    await page.waitForSelector(".navbar", { timeout: 2000 });
    await browser.assertView("plain", ".navbar");
    console.log("end");
  });
});

describe("Проверка содержимого страниц", async function () {
  beforeEach(async ({ browser, currentTest, opts }) => {
    await browser.setWindowSize(1920, 1080);
    await browser.url(`http://localhost:3000/hw/store`);
  });
  it("Тест, который пройдет2", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store");
    await page.waitForSelector(".navbar", { timeout: 2000 });
    await browser.assertView("plain", ".navbar");
    console.log("end");
  });
  it(" /", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store");
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("plain", ".Application", {
      screenshotDelay: 100,
    });
    console.log("end");
  });
  // it("/catalog", async function ({ browser }) {
  //   const puppeteer = await browser.getPuppeteer();
  //   const [page] = await puppeteer.pages();
  //   await page.goto("http://localhost:3000/hw/store/catalog");
  //   await page.waitForSelector("h1", { timeout: 2000 });
  //   const element = await page.$('h1');
  //   const text = await element.textContent()
  //   assert.equal(text, "Catalog");
  //   // await browser.assertView("plain", ".Application", {
  //   //   screenshotDelay: 500,
  //   //   ignoreElements: [".row",".Image", ".ProductItem-Name", ".ProductItem-Price"],
  //   // });
  //   console.log("end");
  // });
  it("/delivery", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store/delivery");
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("plain", ".Application", {
      screenshotDelay: 100,
    });
    console.log("end");
  });
  it("/contacts", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store/contacts");
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("plain", ".Application", {
      screenshotDelay: 100,
    });
    console.log("end");
  });
  it("/cart", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store/cart");
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("plain", ".Application", {
      screenshotDelay: 100,
    });
    console.log("end");
  });
  // it("/catalog/0", async function ({ browser }) {
  //   const puppeteer = await browser.getPuppeteer();
  //   const [page] = await puppeteer.pages();
  //   await page.goto("http://localhost:3000/hw/store/catalog/0");
  //   await page.waitForSelector(".Application", { timeout: 2000 });
  //   await browser.assertView("plain", ".Application", {
  //     screenshotDelay: 10,
  //     ignoreElements: [".Image", ".ProductDetails-Name", ".ProductDetails-Price", ".ProductDetails-Description", "dl"],
  //   });
  //   console.log("end");
  // });
});
describe("тестирование", async function () {
  // const puppeteer = await browser.getPuppeteer();
  // const [page] = await puppeteer.pages();
  // await page.goto("http://localhost:3000/hw/store");
  // await page.waitForSelector(".navbar", { timeout: 2000 });
  // await browser.assertView("plain", ".navbar");
  // console.log("end");
  it("проверка  адаптивности верстки", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store");
    await page.setViewport({ width: 1920, height: 1080 });
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("plain 1920", ".Application", {
      screenshotDelay: 100,
    });
    await page.setViewport({ width: 1500, height: 1080 });
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("plain 1500", ".Application", {
      screenshotDelay: 100,
    });
    await page.setViewport({ width: 1000, height: 1080 });
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("plain 1000", ".Application", {
      screenshotDelay: 100,
    });
    await page.setViewport({ width: 600, height: 1080 });
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("plain 600", ".Application", {
      screenshotDelay: 100,
    });
    await page.setViewport({ width: 400, height: 1080 });
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("plain 400", ".Application", {
      screenshotDelay: 100,
    });
    await page.setViewport({ width: 200, height: 1080 });
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("plain 200", ".Application", {
      screenshotDelay: 100,
    });
    console.log("end");
    console.log("end");
  });
  it("на ширине меньше 576px навигационное меню должно скрываться за 'гамбургер'", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store");
    await page.setViewport({ width: 575, height: 1024 });
    await page.waitForSelector(".Application-Toggler", { timeout: 2000 });
    await browser.assertView("plain", ".Application-Toggler");
    console.log("end");
  });
  it("на ширине от 576px навигационное меню должно появляться из 'гамбургер'", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store");
    await page.setViewport({ width: 576, height: 1024 });
    await page.waitForSelector(".Application-Menu", { timeout: 2000 });
    await browser.assertView("plain", ".Application-Menu");
    console.log("end");
  });
  it("при выборе элемента из меню 'гамбургера', меню должно закрываться", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store");
    await page.setViewport({ width: 575, height: 1024 });
    await page.waitForSelector(".Application-Toggler", { timeout: 2000 });
    await browser.assertView("Toggler", ".Application-Toggler");
    await page.click(".Application-Toggler");
    await page.waitForSelector(".Application-Menu", { timeout: 2000 });
    await browser.assertView("Menu", ".Application-Menu");
    await page.waitForSelector(".nav-link", { timeout: 2000 });
    await page.click(".nav-link");
    await page.waitForSelector(".navbar", { timeout: 2000 });
    await browser.assertView("navbar", ".navbar");
    console.log("end");
  });
});
