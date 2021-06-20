import { Options } from 'selenium-webdriver/chrome';
import { Builder, WebDriver } from 'selenium-webdriver';
import 'chromedriver';

class ChromeDriver {
  private timeout?: number = 20000;

  constructor(timeout?: number) {
    this.timeout = timeout;
  }

  private chromeOptions = new Options()
    .headless()
    .windowSize({ width: 1920, height: 1080 })
    .excludeSwitches('enable-logging');

  private chromeDriver: WebDriver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(this.chromeOptions)
    .build();

  init() {
    this.chromeDriver
      .manage()
      .setTimeouts({
        script: this.timeout,
        pageLoad: this.timeout,
        implicit: this.timeout,
      })
      .then();

    this.chromeDriver.manage().window().maximize().then();

    return this.chromeDriver;
  }
}

export const driver = new ChromeDriver(20000).init();
