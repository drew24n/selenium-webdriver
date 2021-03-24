import { driver } from '../../config/chromedriver';
import {
  By,
  Key,
  until,
  WebElement,
  WebElementPromise
} from 'selenium-webdriver';

export class BasePage {
  public open(path: string): Promise<void> {
    return driver.get(path);
  }

  public findElementByCss(cssLocator: string): WebElementPromise {
    const el = driver.findElement(By.css(cssLocator));
    return driver.wait(until.elementIsVisible(el));
  }

  public enterText(input: WebElement, text: string): Promise<void> {
    return input.sendKeys(text, Key.ENTER);
  }

  public get pageTitle(): Promise<string> {
    return driver.getTitle();
  }
}
