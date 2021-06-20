import { driver } from '../../../config/chromeDriver';
import { By, Key, until, WebElement, WebElementPromise } from 'selenium-webdriver';

export class BasePage {
  open(path: string): Promise<void> {
    return driver.get(path);
  }

  findElementByCss(cssLocator: string): WebElementPromise {
    const el = driver.findElement(By.css(cssLocator));
    return driver.wait(until.elementIsVisible(el));
  }

  enterText(input: WebElement, text: string): Promise<void> {
    return input.sendKeys(text, Key.ENTER);
  }

  get pageTitle(): Promise<string> {
    return driver.getTitle();
  }
}
