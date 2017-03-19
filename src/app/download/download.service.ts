import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserDetectionService } from '../utilities/browser-detection.service';

declare var chrome: any;
declare var InstallTrigger: any;

@Injectable()
export class DownloadService {

  constructor(private _browserService: BrowserDetectionService, private _router: Router) { }

  get isInstalled(): boolean {
    return this._browserService.isChrome() && this.chromeIsInstalled;
  }

  get chromeIsInstalled(): boolean {
      return this._browserService.isChrome() && chrome.app.isInstalled;
  }

  install(): void {
    if (this._browserService.isChrome()) {
      this.installChrome();
    } else if (this._browserService.isFirefox) {
      this.installFirefox();
    }

    this._router.navigate(['/download']);
  }

  installChrome(): void {
      if (this._browserService.isChrome() && !this.chromeIsInstalled && chrome) {
        chrome.webstore.install(
          "https://chrome.google.com/webstore/detail/ebpdoingcodjhfhmecjjfnhohhmcfnlc",
          () => { chrome.app.isInstalled = true; });
      } else {
          window.open('https://chrome.google.com/webstore/detail/dubplus/ebpdoingcodjhfhmecjjfnhohhmcfnlc', '_blank');
      }
  }

  installFirefox(): void {
      window.open('https://addons.mozilla.org/en-US/firefox/addon/dubplus/', '_blank');
  }

}
