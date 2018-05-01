import { Injectable } from '@angular/core';

declare var document: any;
declare var InstallTrigger: any;
declare var isIE: any;
declare var opr: any;
declare var safari: any;
declare var window: any;

@Injectable()
export class BrowserDetectionService {

  constructor() { }

  isOpera(): boolean {
    return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  }

  isChrome(): boolean {
    return !!window.chrome && !!window.chrome.webstore;
  }

  isEdge(): boolean {
    return !isIE && !!window.StyleMedia;
  }

  isIE(): boolean {
    return /*@cc_on!@*/false || !!document.documentMode;
  }

  isFirefox(): boolean {
    return typeof InstallTrigger !== 'undefined';
  }

  isSafari(): boolean {
    return /constructor/i.test(window.HTMLElement) ||
      (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
  }

  isLinux(): boolean {
    return window.navigator && window.navigator.userAgent.indexOf("Linux") !== -1
  }

  isOsx(): boolean {
    return window.navigator && window.navigator.userAgent.indexOf("Mac") !== -1
  }

  isWindows(): boolean {
    return window.navigator && window.navigator.userAgent.indexOf("Windows") !== -1
  }

}
