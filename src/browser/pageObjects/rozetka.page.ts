import { BasePage } from './base.page';
import { rozetkaBaseURL } from '../../config/env';
import { WebElementPromise } from 'selenium-webdriver';

class Rozetka extends BasePage {
  open(path: string = ''): Promise<void> {
    return super.open(`${rozetkaBaseURL}/${path}`);
  }

  get searchField(): WebElementPromise {
    return this.findElementByCss('[name=search]');
  }

  get firstItem(): WebElementPromise {
    return this.findElementByCss(
      '.catalog-grid__cell:first-child .goods-tile__title'
    );
  }
}

export default new Rozetka();
