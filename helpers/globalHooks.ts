import { saveScreenshot } from './saveScreenshot';
import { driver } from '../config/chromeDriver';

const addContext = require('mochawesome/addContext');

afterEach('make screenshot if test fails', async function () {
  if (this.currentTest?.state === 'failed') {
    const screenshotName = await saveScreenshot();
    addContext(this, `./screenshots/${screenshotName}.png`);
  }
});

after('close browser after all tests are done', async function () {
  await driver.quit();
});
