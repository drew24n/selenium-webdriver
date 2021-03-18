import { Options } from 'selenium-webdriver/chrome';
import { Builder, WebDriver } from 'selenium-webdriver';
import 'chromedriver';

const chromeOptions = new Options();

chromeOptions
  .headless()
  // .addArguments('start-maximized')
  .excludeSwitches('enable-logging');

export const driver: WebDriver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(chromeOptions)
  .build();
