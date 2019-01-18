import { AppPage } from './app.po';
import { browser } from 'protractor';

import * as tldjs from 'tldjs';

const myTldjs = tldjs.fromUserSettings({
  validHosts: ['localhost']
});

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();

    browser.getCurrentUrl().then(url => {
      const domain = myTldjs.parse(url).domain
      expect(page.getTitleText()).toEqual(`Welcome to ${domain}!`);
    })
  });

  it('should display logo', () => {
    page.navigateTo();

    browser.getCurrentUrl().then(url => {
      const domain = myTldjs.parse(url).domain
      expect(page.getLogoSrc()).toEqual(`http://assets.dokspotapp.com.s3.amazonaws.com/${domain}/logo.png`);
    })
  })
});
