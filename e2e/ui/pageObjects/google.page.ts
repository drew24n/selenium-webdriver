import { Page } from './page';
import { WebElementPromise } from 'selenium-webdriver';

class GooglePage extends Page {
  open(path: string = ''): Promise<void> {
    return super.openPage(`${process.env.GOOGLE}/${path}`);
  }

  get searchField(): WebElementPromise {
    return super.findElementByCss('[name=q]');
  }

  get searchBtn(): WebElementPromise {
    return super.findElementByCss('#rcnt');
  }
}

export default new GooglePage();
