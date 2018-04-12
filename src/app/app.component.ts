import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';

import { LoginPage } from '../pages/login/login';
import { StorageProvider } from '../providers/storage/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(private platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private translate: TranslateService,
              public storageProvider: StorageProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // This language will be used as a fallback when a translation isn't found in the current language
      this.initTranslate();

    });
  }

  initTranslate() {
    /* **** Here we start the language magic **** */
    // This language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('nl');

    // If we are running on a desktop PC, we check the browser language
    if (this.platform.is('core')) { 
      console.log('Running on Windows');
      this.translate.use(this.translate.getBrowserLang());
    }
    else {
      this.translate.use(this.platform.lang());
    }
  }
  
}

