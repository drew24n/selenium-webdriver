import { expect } from 'chai';
import Google from '../pageObjects/google.page';

describe('Google tests (Browser)', function () {
  it('Check google search page title', async function () {
    await Google.open();
    const searchField = await Google.searchField;
    await searchField.click();
    await Google.enterText(searchField, 'webdriver');
    await Google.searchBtn.click();
    const title = await Google.pageTitle;

    expect(title).to.contain('webdriver');
  });
});
