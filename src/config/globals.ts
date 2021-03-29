import { saveScreenshot } from '../utils/saveScreenshot';
import { driver } from './chromedriver';

const addContext = require('mochawesome/addContext');

export class GlobalHooks {
  init() {
    afterEach('save browser screenshot if test fails', async function () {
      if (this.currentTest?.state === 'failed') {
        const screenshotName = await saveScreenshot();
        addContext(this, `./screenshots/${screenshotName}.png`);
      }
    });
  }
}

after('close browser after all tests are done', async function () {
  await driver.quit();
});
