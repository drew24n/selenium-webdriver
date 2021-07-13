import { existsSync, mkdirSync } from 'fs';
import { writeFile } from 'fs/promises';
import { driver } from '../config/chromeDriver';

/**
 * Saves a screenshot from browser instance and adds it to mochawesome report
 *
 * @returns {number} Generates timestamp as unique name for screenshot
 */
!(async function saveScreenshot(): Promise<number> {
  const screenshotsPath = './reports/screenshots';
  const screenshotName = Date.now();

  if (!existsSync(screenshotsPath)) {
    mkdirSync(screenshotsPath, { recursive: true });
  }

  const image = await driver.takeScreenshot();
  await writeFile(`reports/screenshots/${screenshotName}.png`, image, 'base64');

  return screenshotName;
})();
