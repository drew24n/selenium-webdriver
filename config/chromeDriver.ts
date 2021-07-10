import { Options } from 'selenium-webdriver/chrome';
import { Builder, WebDriver } from 'selenium-webdriver';
import 'chromedriver';

interface Timeout {
  implicit?: number;
  pageLoad?: number;
  script?: number;
}

class ChromeDriver {
  private timeout?: Timeout;

  constructor(timeout?: Timeout) {
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
        script: this.timeout?.script,
        pageLoad: this.timeout?.pageLoad,
        implicit: this.timeout?.implicit
      })
      .then();

    this.chromeDriver.manage().window();

    return this.chromeDriver;
  }
}

export const driver = new ChromeDriver({
  pageLoad: 10000,
  implicit: 5000,
  script: 2500
}).init();
