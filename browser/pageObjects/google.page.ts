import { BasePage } from './base.page';
import { googleURL } from '../../config/env';
import { WebElementPromise } from 'selenium-webdriver';

class Google extends BasePage {
  open(path: string = ''): Promise<void> {
    return super.open(`${googleURL}/${path}`);
  }

  get searchField(): WebElementPromise {
    return this.findElementByCss('[name=q]');
  }

  get searchBtn(): WebElementPromise {
    return this.findElementByCss('#rcnt');
  }
}

export default new Google();
