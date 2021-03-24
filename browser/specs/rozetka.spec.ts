import Rozetka from '../pageObjects/rozetka.page';
import { expect } from 'chai';

describe('Rozetka tests (Browser)', function () {
  it('Search iPhone 12 Pro Max', async function () {
    await Rozetka.open();
    const searchField = await Rozetka.searchField;
    await Rozetka.enterText(searchField, 'Apple iPhone 12');
    const firstItem = await Rozetka.firstItem;
    const text = await firstItem.getText();

    expect(text).to.contain('Apple iPhone 12');
  });
});
