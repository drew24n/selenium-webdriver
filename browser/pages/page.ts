import { driver } from '../../config/chromedriver';
import { saveScreenshot } from '../../utils/saveScreenshot';

const addContext = require('mochawesome/addContext');

class Page {
  constructor() {
    afterEach('save browser screenshot if test fails', async function () {
      if (this.currentTest?.state === 'failed') {
        const screenshotName = await saveScreenshot();
        addContext(this, `./screenshots/${screenshotName}.png`);
      }
    });
    after('close browser after all tests are done', () => driver.quit());
    driver.manage().window().maximize().then();
  }

  open(path: string): Promise<void> {
    return driver.get(path);
  }
}

export default new Page();
