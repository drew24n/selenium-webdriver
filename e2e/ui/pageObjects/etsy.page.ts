import { Page } from './page';
import { WebElement, WebElementPromise } from 'selenium-webdriver';
import { parsePrice } from '../../../helpers/parsePrice';

class EtsyPage extends Page {
  open(path: string = ''): Promise<void> {
    return super.openPage(`${process.env.ETSY}/${path}`);
  }

  get searchField(): WebElementPromise {
    return super.findElementByCss('[name=search_query]');
  }

  get searchBtn(): WebElementPromise {
    return super.findElementByCss('[data-id=gnav-search-submit-button]');
  }

  get merchandiseItems(): Promise<WebElement[]> {
    return super.findElementsByCss('.tab-reorder-container > li');
  }

  get selectMenus(): Promise<WebElement[]> {
    return super.findElementsByCss('#listing-page-cart select');
  }

  get proceedToCheckoutBtn(): WebElementPromise {
    return super.findElementByCss('.proceed-to-checkout');
  }

  get price(): Promise<number> {
    return super
      .findElementByCss('[data-buy-box-region="price"] p')
      .getText()
      .then((str) => parsePrice(str));
  }

  get cartPrice(): Promise<number> {
    return super.findElementsByCss('p .currency-value').then((price) => {
      return price[1].getText().then((str) => parsePrice(str));
    });
  }

  get cartItemsQuantity(): Promise<number> {
    return super
      .findElementsByCss('[name=listing-quantity] > [selected]')
      .then((price) => price[1].getText().then((val) => +val.trim()));
  }

  get addToCartBtn(): WebElementPromise {
    return super.findElementByCss('form > [type="submit"]');
  }

  get joinEmailField(): WebElementPromise {
    return super.findElementByCss('#join_neu_email_field');
  }
}

export default new EtsyPage();
