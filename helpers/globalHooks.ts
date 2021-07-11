import { saveScreenshot } from './saveScreenshot';
import { driver } from '../config/chromeDriver';

const addContext = require('mochawesome/addContext');

export function initHooks(): void {
  afterEach('make screenshot', async function () {
    if (this.currentTest?.state === 'failed') {
      const screenshotName = await saveScreenshot();
      addContext(this, `./screenshots/${screenshotName}.png`);
    }
  });

  after('close browser', async function () {
    await driver.quit();
  });
}
