const { assert } = require("chai");

describe("store", async function () {
  it("Тест, который пройдет2", async function ({ browser }) {
    await browser.setWindowSize(1920, 1080);
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store");
    await page.waitForSelector(".navbar", { timeout: 2000 });
    await browser.assertView("plain", ".navbar", {
      screenshotDelay: 100,
    });
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
    await browser.assertView("plain", ".navbar", {
      screenshotDelay: 100,
    });
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
  it("/catalog", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store/catalog");
    await page.waitForSelector("h1", { timeout: 2000 });
    const text = await this.browser.$("h1").getText();
    assert.equal(text, "Catalog");
    // await browser.assertView("plain", ".Application", {
    //   screenshotDelay: 500,
    //   ignoreElements: [".row",".Image", ".ProductItem-Name", ".ProductItem-Price"],
    // });
    console.log("end");
  });
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
describe("тестирование общих требований", async function () {
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
      screenshotDelay: 1000,
    });
    await page.setViewport({ width: 1000, height: 1080 });
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("plain 1000", ".Application", {
      screenshotDelay: 1000,
    });
    await page.setViewport({ width: 600, height: 1080 });
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("plain 600", ".Application", {
      screenshotDelay: 1000,
    });
    await page.setViewport({ width: 400, height: 1080 });
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("plain 400", ".Application", {
      screenshotDelay: 1000,
    });
    await page.setViewport({ width: 200, height: 1080 });
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("plain 200", ".Application", {
      screenshotDelay: 1000,
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
    await browser.assertView("plain", ".Application-Toggler", {
      screenshotDelay: 100,
    });
    console.log("end");
  });
  it("на ширине от 576px навигационное меню должно появляться из 'гамбургер'", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store");
    await page.setViewport({ width: 576, height: 1024 });
    await page.waitForSelector(".Application-Menu", { timeout: 2000 });
    await browser.assertView("plain", ".Application-Menu", {
      screenshotDelay: 100,
    });
    console.log("end");
  });
  it("при выборе элемента из меню 'гамбургера', меню должно закрываться", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store");
    await page.setViewport({ width: 575, height: 1024 });
    await page.waitForSelector(".Application-Toggler", { timeout: 2000 });
    await browser.assertView("Toggler", ".Application-Toggler", {
      screenshotDelay: 100,
    });
    await page.click(".Application-Toggler");
    await page.waitForSelector(".Application-Menu", { timeout: 2000 });
    await browser.assertView("Menu", ".Application-Menu", {
      screenshotDelay: 100,
    });
    await page.waitForSelector(".nav-link", { timeout: 2000 });
    await page.click(".nav-link");
    await page.waitForSelector(".navbar", { timeout: 2000 });
    await browser.assertView("navbar", ".navbar", {
      screenshotDelay: 100,
    });
    console.log("end");
  });
});

describe("тестирование каталог", async function () {
  beforeEach(async ({ browser, currentTest, opts }) => {
    await browser.setWindowSize(1920, 1080);
    await browser.url(`http://localhost:3000/hw/store/catalog`);
  });
  it("В каталоге отображаются пришедшие с сервера товары", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    const productListSelector = ".row";
    await page.waitForSelector(productListSelector);
    const productList = await page.$$(productListSelector);
    assert.ok(productList.length > 0);
    console.log("end");
  });
  it("на странице с подробной информацией отображаются: название товара, его описание, цена, цвет, материал и кнопка * * 'добавить в корзину'", async function ({
    browser,
  }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store/catalog/0");
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("collImage", ".col-12", {
      screenshotDelay: 10,
      ignoreElements: [".Image", ".ProductDetails-Name", ".ProductDetails-Price", ".ProductDetails-Description", "dd"],
    });
    await browser.assertView("AddToCart", ".ProductDetails-AddToCart", {
      screenshotDelay: 10,
    });
    const nameSelector = ".ProductDetails-Name";
    const priceSelector = ".ProductDetails-Price";
    const descriptionSelector = ".ProductDetails-Description";
    const colorSelector = ".ProductDetails-Color";
    const materialSelector = ".ProductDetails-Material";

    const nameFirst = await this.browser.$(`${nameSelector}`).getText();
    const priceText = await this.browser.$(` ${priceSelector}`).getText();
    const descriptionText = await this.browser.$(` ${descriptionSelector}`).getText();
    const colorText = await this.browser.$(` ${colorSelector}`).getText();
    const materialText = await this.browser.$(materialSelector).getText();

    assert.ok(nameFirst.length > 0);
    assert.ok(priceText.length > 0);
    assert.ok(descriptionText.length > 0);
    assert.ok(colorText.length > 0);
    assert.ok(materialText.length > 0);

    await page.$eval(nameSelector, element => element.textContent = 'Тест');
    await page.$eval(priceSelector, element => element.textContent = 'Тест');
    await page.$eval(descriptionSelector, element => element.textContent = 'Тест');
    await page.$eval(colorSelector, element => element.textContent = 'Тест');
    await page.$eval(materialSelector, element => element.textContent = 'Тест');
    await browser.assertView("Application", ".Application", {
      screenshotDelay: 100,
    });
    console.log("end");
  });
  it("если товар уже добавлен в корзину, в каталоге и на странице товара должно отображаться сообщение об этом", async function ({
    browser,
  }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store/catalog/0");
    await page.waitForSelector(".ProductDetails-AddToCart", { timeout: 2000 });
    await page.click(".ProductDetails-AddToCart");
    await page.click(".ProductDetails-AddToCart");
    await page.click(".ProductDetails-AddToCart");
    await page.waitForSelector(".CartBadge", { timeout: 2000 });
    await browser.assertView("navbar", ".navbar", {
      screenshotDelay: 100,
    });
    await browser.assertView("information_about_add_item", ".CartBadge", {
      screenshotDelay: 100,
    });
    console.log("end");
  });
  it("если товар уже добавлен в корзину, повторное нажатие кнопки 'добавить в корзину' должно увеличивать его количество", async function ({
    browser,
  }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store/catalog/0");
    await page.waitForSelector(".ProductDetails-AddToCart", { timeout: 2000 });
    await page.click(".ProductDetails-AddToCart");
    await page.goto("http://localhost:3000/hw/store/catalog/1");
    await page.waitForSelector(".ProductDetails-AddToCart", { timeout: 2000 });
    await page.click(".ProductDetails-AddToCart");
    await page.waitForSelector(".Application", { timeout: 2000 });
    await browser.assertView("navbar", ".navbar", {
      screenshotDelay: 100,
    });
    console.log("end");
  });
  it("содержимое корзины должно сохраняться между перезагрузками страницы", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.reload();
    await page.goto("http://localhost:3000/hw/store/catalog/0");
    await page.waitForSelector(".ProductDetails-AddToCart", { timeout: 2000 });
    await page.click(".ProductDetails-AddToCart");
    await page.goto("http://localhost:3000/hw/store/catalog/1");
    await page.waitForSelector(".ProductDetails-AddToCart", { timeout: 2000 });
    await page.click(".ProductDetails-AddToCart");
    await page.reload();
    await page.waitForSelector(".navbar", { timeout: 2000 });
    await browser.assertView("plain", ".navbar", {
      screenshotDelay: 10,
    });
    console.log("end");
  });
});

describe("тестирование корзины", async function () {
  beforeEach(async ({ browser, currentTest, opts }) => {
    await browser.setWindowSize(1920, 1080);
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.goto("http://localhost:3000/hw/store/catalog/0");
    await page.waitForSelector(".ProductDetails-AddToCart", { timeout: 2000 });
    await page.click(".ProductDetails-AddToCart");
    await page.goto("http://localhost:3000/hw/store/catalog/1");
    await page.waitForSelector(".ProductDetails-AddToCart", { timeout: 2000 });
    await page.click(".ProductDetails-AddToCart");
    await page.goto("http://localhost:3000/hw/store/cart");
  });
  it("в шапке рядом со ссылкой на корзину должно отображаться количество не повторяющихся товаров в ней", async function ({
    browser,
  }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.waitForSelector(".navbar", { timeout: 2000 });
    await browser.assertView("plain", ".navbar", {
      screenshotDelay: 10,
    });
    console.log("end");
  });
  it("в корзине должна отображаться таблица с добавленными в нее товарами", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.waitForSelector(".Application");
    await page.waitForSelector(".col", { timeout: 2000 });

    const nameSelector = ".Cart-Name";
    const priceSelector = ".Cart-Price";
    const totalSelector = ".Cart-Total";
    const orderSelector = ".Cart-OrderPrice";
    const countSelector = ".Cart-Count"

    const firstSelector = "tbody tr:first-child";
    const secondSelector = "tbody tr:nth-child(2)";
    const nameFirst = await this.browser.$(`${firstSelector} ${nameSelector}`).getText();

    const priceFirst = await this.browser.$(`${firstSelector} ${priceSelector}`).getText();
    const valuePrice = priceFirst.slice(1);

    const totalFirst = await this.browser.$(`${firstSelector} ${totalSelector}`).getText();
    const valueTotalFirst = totalFirst.slice(1);
    const totalSecond = await this.browser.$(`${secondSelector} ${totalSelector}`).getText();
    const valueTotalSecond = totalSecond.slice(1);

    const order = await this.browser.$(orderSelector).getText();
    const valueOrder = order.slice(1);



    await page.$eval(`${firstSelector} ${nameSelector}`, element => element.textContent = 'Тест');
    await page.$eval(`${firstSelector} ${priceSelector}`, element => element.textContent = '$Тест');
    await page.$eval(`${firstSelector} ${totalSelector}`, element => element.textContent = '$Тест');
    await page.$eval(`${firstSelector} ${countSelector}`, element => element.textContent = '1');
    await page.$eval(`${secondSelector} ${nameSelector}`, element => element.textContent = 'Тест');
    await page.$eval(`${secondSelector} ${priceSelector}`, element => element.textContent = '$Тест');
    await page.$eval(`${secondSelector} ${totalSelector}`, element => element.textContent = '$Тест');
    await page.$eval(`${secondSelector} ${countSelector}`, element => element.textContent = '1');
    await page.$eval(`${orderSelector}`, element => element.textContent = '$Тест');

    await browser.assertView("table", ".col", {
      screenshotDelay: 10,
      // ignoreElements: [".Cart-Name", ".Cart-Price", ".Cart-Total", ".Cart-OrderPrice"],
    });
    console.log("end");
  });
  it("для каждого товара должны отображаться название, цена, количество , стоимость, а также должна отображаться общая сумма заказа", async function ({
    browser,
  }) {

    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.waitForSelector(".col", { timeout: 2000 });
    const nameSelector = ".Cart-Name";
    const priceSelector = ".Cart-Price";
    const totalSelector = ".Cart-Total";
    const orderSelector = ".Cart-OrderPrice";

    const firstSelector = "tbody tr:first-child";
    const secondSelector = "tbody tr:nth-child(2)";
    const nameFirst = await this.browser.$(`${firstSelector} ${nameSelector}`).getText();

    const priceFirst = await this.browser.$(`${firstSelector} ${priceSelector}`).getText();
    const valuePrice = priceFirst.slice(1);

    const totalFirst = await this.browser.$(`${firstSelector} ${totalSelector}`).getText();
    const valueTotalFirst = totalFirst.slice(1);
    const totalSecond = await this.browser.$(`${secondSelector} ${totalSelector}`).getText();
    const valueTotalSecond = totalSecond.slice(1);

    const order = await this.browser.$(orderSelector).getText();
    const valueOrder = order.slice(1);

    assert.ok(nameFirst.length > 0);
    assert.ok(valuePrice.length > 0);
    assert.ok(valueTotalFirst.length > 0);
    assert.ok(valueOrder.length > 0);
    assert.ok(+valueOrder === +valueTotalFirst + +valueTotalSecond);
    console.log("end tbody");
  });
  it("в корзине должна быть кнопка 'очистить корзину', по нажатию на которую все товары должны удаляться", async function ({
    browser,
  }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.waitForSelector(".Cart-Clear", { timeout: 2000 });
    await page.click(".Cart-Clear");
    const tbodySelector = "tbody";
    const tbodyElement = await page.$$(tbodySelector);
    console.log(tbodyElement.length, "length");
    await browser.assertView("table", ".col", {
      screenshotDelay: 10,
    });
    assert.ok(tbodyElement.length === 0);
    console.log("end");
  });
  it("если корзина пустая, должна отображаться ссылка на каталог товаров", async function ({ browser }) {
    const puppeteer = await browser.getPuppeteer();
    const [page] = await puppeteer.pages();
    await page.waitForSelector(".Cart-Clear", { timeout: 2000 });
    await page.click(".Cart-Clear");
    await page.waitForSelector(".col", { timeout: 2000 });
    const link = await page.$('.col a[href="/hw/store/catalog"]');
    await browser.assertView("href", ".col a", {
      screenshotDelay: 100,
    });
    assert.ok(link);
    console.log("end");
  });
});
