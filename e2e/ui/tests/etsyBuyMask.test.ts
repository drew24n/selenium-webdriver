import { expect } from 'chai';
import EtsyPage from '../pageObjects/etsy.page';
import { getRandomNum } from '../../../helpers/getRandomNumber';
import { Key } from 'selenium-webdriver';

describe('Etsy shop tests (UI)', function () {
  it('Add face masks to shopping cart', async function () {
    await EtsyPage.open();
    const searchField = await EtsyPage.searchField;
    await searchField.click();
    await EtsyPage.enterText(searchField, 'face mask');
    await EtsyPage.searchBtn.click();
    const merchandiseItems = await EtsyPage.merchandiseItems;
    await merchandiseItems[getRandomNum(merchandiseItems.length - 1)].click();
    const browserTabs = await EtsyPage.browserTabs;
    await EtsyPage.switchTabs(browserTabs[browserTabs.length - 1]);
    let selectMenus = await EtsyPage.selectMenus;
    if (selectMenus?.length) {
      for (let i = 0; i < selectMenus.length; i++) {
        await selectMenus[i].click();
        await selectMenus[i].sendKeys(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ENTER);
        if (i === selectMenus.length - 1) break;
        await EtsyPage.checkStaleness(selectMenus[i]);
        selectMenus = await EtsyPage.selectMenus;
      }
    }
    const expectedPrice = await EtsyPage.price;
    await EtsyPage.addToCartBtn.click();
    const cartPrice = await EtsyPage.cartPrice;
    const cartItemsQuantity = await EtsyPage.cartItemsQuantity;
    expect(cartPrice).to.be.approximately(expectedPrice * 3, 0.25);
    expect(cartItemsQuantity).to.be.equal(3);
  });
});
