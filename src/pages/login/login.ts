import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, AlertController  } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';


import { TabsPage } from '../../pages/tabs/tabs';
import { SignupPage } from '../../pages/signup/signup';
import { SpoedPage } from '../../pages/spoed/spoed';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  sendCodeTitle = "";
  sendCodeSubTitle = "";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public nav: Nav,
              public translateService: TranslateService,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
      this.nav.setRoot(TabsPage);
  }

  doSignUp() {
    this.nav.push(SignupPage);
  }

  doForgotCode() {
    this.showAlert();
  }

  doEmergency() {
    this.nav.push(SpoedPage);
  }

  showAlert() {
    this.translateService.get(['SENDCODETITLE', 'SENDCODESUBTITLE']).subscribe(values => {
      let alert = this.alertCtrl.create({
        title: values['SENDCODETITLE'],
        subTitle: values['SENDCODESUBTITLE'],
      });
      alert.present();
    });
  }

}
