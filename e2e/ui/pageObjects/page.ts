import { driver } from '../../../config/chromeDriver';
import { By, until, WebElement, WebElementPromise } from 'selenium-webdriver';

export class Page {
  openPage(path: string): Promise<void> {
    return driver.get(path);
  }

  findElementByCss(cssLocator: string): WebElementPromise {
    const element = driver.findElement(By.css(cssLocator));
    return driver.wait(until.elementIsVisible(element));
  }

  findElementsByCss(cssLocator: string): Promise<WebElement[]> {
    return driver.findElements(By.css(cssLocator));
  }

  enterText(input: WebElement, text: string): Promise<void> {
    return input.sendKeys(text);
  }

  checkStaleness(elem: WebElement): Promise<boolean> {
    return driver.wait(until.stalenessOf(elem));
  }

  get pageTitle(): Promise<string> {
    return driver.getTitle();
  }

  get browserTabs(): Promise<string[]> {
    return driver.getAllWindowHandles();
  }

  switchTabs(tabId: string): Promise<void> {
    return driver.switchTo().window(tabId);
  }
}
