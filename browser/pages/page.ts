import { driver } from '../../config/chromedriver';
import { saveScreenshot } from '../../utils/saveScreenshot';

const addContext = require('mochawesome/addContext');

class Page {
  open(path: string) {
    return driver.get(path);
  }

  screenshotOnFail() {
    afterEach('save browser screenshot on test failure', async function () {
      if (this.currentTest?.state === 'failed') {
        const screenshotName = await saveScreenshot();
        addContext(this, `./screenshots/${screenshotName}.png`);
      }
    });
  }
}

export default new Page();
