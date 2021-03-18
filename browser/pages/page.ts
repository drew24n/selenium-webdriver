import { driver } from '../../config/chromedriver';

class Page {
  open(path: string) {
    return driver.get(`${path}`);
  }
}

export default new Page
