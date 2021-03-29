import { expect } from 'chai';
import Rozetka from '../pageObjects/rozetka.page';
import { GlobalHooks } from '../../config/globals';

describe('Rozetka tests (Browser)', function () {
  new GlobalHooks().init();

  it('Search iPhone 12 Pro Max', async function () {
    await Rozetka.open();
    const searchField = await Rozetka.searchField;
    await Rozetka.enterText(searchField, 'Apple iPhone 12');
    const firstItem = await Rozetka.firstItem;
    const itemTitle = await firstItem.getText();

    expect(itemTitle).to.contain('Apple iPhone 12');
  });
});
