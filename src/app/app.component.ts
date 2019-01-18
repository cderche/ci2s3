import { Component } from '@angular/core';

import * as tldjs from 'tldjs';

const myTldjs = tldjs.fromUserSettings({
  validHosts: ['localhost']
});

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  domain = myTldjs.parse(window.location.host).domain;
  title = this.domain;
  logo_url = `https://assets.dokspotapp.com/${this.domain}/logo.png`;


  constructor() {
    console.log(this.logo_url)
  }
}
