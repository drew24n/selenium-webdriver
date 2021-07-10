import { expect } from 'chai';
import GooglePage from '../pageObjects/google.page';

describe('Google tests (UI)', function () {
  it('Search page title should contain "hello" word', async function () {
    await GooglePage.open();
    const searchField = await GooglePage.searchField;
    await searchField.click();
    await GooglePage.enterText(searchField, 'hello');
    await GooglePage.searchBtn.click();
    const title = await GooglePage.pageTitle;
    expect(title).to.contain('hello');
  });
});
