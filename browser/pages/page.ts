import { driver } from '../../config/chromedriver';

class Page {
  open(path: string): Promise<void> {
    return driver.get(path);
  }
}

export default new Page();
