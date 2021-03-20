import { By, Key, until } from 'selenium-webdriver';
import Page from '../pages/page';
import { expect } from 'chai';
import { driver } from '../../config/chromedriver';

it('search on Google', async () => {
  await Page.open('https://www.google.com');
  await driver.findElement(By.name('q')).click();
  await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
  await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
  await driver.findElement(By.name('q')).clear();

  const title = await driver.getTitle();

  expect(title).be.equal('w1ebdriver - Google Search');
});

after('quit browser on complete', async () => await driver.quit());
Page.screenshotOnFail();
