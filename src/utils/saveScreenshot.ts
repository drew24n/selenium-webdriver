import { existsSync, mkdirSync } from 'fs';
import { writeFile } from 'fs/promises';
import { driver } from '../config/chromedriver';

export async function saveScreenshot() {
  const screenshotsPath = './reports/screenshots';
  const screenshotName = Date.now();

  if (!existsSync(screenshotsPath)) {
    mkdirSync(screenshotsPath, { recursive: true });
  }

  const image = await driver.takeScreenshot();
  await writeFile(`reports/screenshots/${screenshotName}.png`, image, 'base64');

  return screenshotName;
}
