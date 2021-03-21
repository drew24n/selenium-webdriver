import { By, Key, until } from 'selenium-webdriver';
import { expect } from 'chai';
import { driver } from '../../config/chromedriver';
import Page from '../pages/page';
import BrowserHooks from '../../config/global';

describe('Google tests (Browser)', function () {
  BrowserHooks.init();

  it('Check google search page title', async function () {
    await Page.open('https://www.google.com');
    await driver.findElement(By.name('q')).click();
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
    await driver.findElement(By.name('q')).clear();
    const title = await driver.getTitle();

    expect(title).to.contain('webdriver');
  });
});
