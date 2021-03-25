import { Options } from 'selenium-webdriver/chrome';
import { Builder, WebDriver } from 'selenium-webdriver';
import 'chromedriver';

const timeOut = 20000;

const chromeOptions = new Options()
  .headless()
  .windowSize({ width: 1920, height: 1080 }) //for full size screenshots in headless mode
  .excludeSwitches('enable-logging'); //hide chrome warnings

export const driver: WebDriver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(chromeOptions)
  .build();

driver
  .manage()
  .setTimeouts({
    script: timeOut,
    pageLoad: timeOut,
    implicit: timeOut
  })
  .then();

driver.manage().window().maximize().then();
