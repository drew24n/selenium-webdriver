import { expect } from 'chai';
import GooglePage from '../pageObjects/google.page';
import { GlobalHooks } from '../../config/globals';

describe('Google tests (Browser)', function () {
  new GlobalHooks().init();

  it('Check google search page title', async function () {
    await GooglePage.open();
    const searchField = await GooglePage.searchField;
    await searchField.click();
    await GooglePage.enterText(searchField, 'webdriver');
    await GooglePage.searchBtn.click();
    const title = await GooglePage.pageTitle;

    expect(title).to.contain('webdriver');
  });
});
