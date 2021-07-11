import { expect } from 'chai';
import GooglePage from '../pageObjects/google.page';

describe('Google tests (UI)', function () {
  it('Page title should contain "webdriver" word', async function () {
    await GooglePage.open();
    const searchField = await GooglePage.searchField;
    await GooglePage.enterText(searchField, 'webdriver');
    await GooglePage.searchBtn.click();
    const title = await GooglePage.pageTitle;
    expect(title).to.contain('webdriver');
  });
});
