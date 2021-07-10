import { driver } from '../../../config/chromeDriver';
import { By, Key, until, WebElement, WebElementPromise } from 'selenium-webdriver';
import { initGlobalHooks } from '../../../helpers/globalHooks';

export class Page {
  constructor() {
    initGlobalHooks();
  }

  openPage(path: string): Promise<void> {
    return driver.get(path);
  }

  findElementByCss(cssLocator: string): WebElementPromise {
    const element = driver.findElement(By.css(cssLocator));
    return driver.wait(until.elementIsVisible(element));
  }

  enterText(input: WebElement, text: string): Promise<void> {
    return input.sendKeys(text, Key.ENTER);
  }

  get pageTitle(): Promise<string> {
    return driver.getTitle();
  }
}
