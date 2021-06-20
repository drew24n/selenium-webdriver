import { BasePage } from './base.page';
import { WebElementPromise } from 'selenium-webdriver';

class GooglePage extends BasePage {
  open(path: string = ''): Promise<void> {
    return super.open(`${process.env.GOOGLE}/${path}`);
  }

  get searchField(): WebElementPromise {
    return this.findElementByCss('[name=q]');
  }

  get searchBtn(): WebElementPromise {
    return this.findElementByCss('#rcnt');
  }
}

export default new GooglePage();
