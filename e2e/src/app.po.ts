import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getLogoSrc() {
    return element(by.css('app-root img')).getAttribute('src');
  }
}
