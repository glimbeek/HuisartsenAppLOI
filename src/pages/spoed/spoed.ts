import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Nav } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { CallNumber } from '@ionic-native/call-number';
import { ToastController } from 'ionic-angular';

import { TelefoonPage } from '../../pages/telefoon/telefoon';
import { VervolgschermPage } from '../../pages/vervolgscherm/vervolgscherm';

/**
 * Generated class for the SpoedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spoed',
  templateUrl: 'spoed.html',
})
export class SpoedPage {
  
  blavar: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public translateService: TranslateService,
              public alertCtrl: AlertController,
              public callNumber: CallNumber,
              public toastCtrl: ToastController,
              public nav: Nav) {



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpoedPage');
  }

  doEmergency() {
    this.showAlert();
  }


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'LET OP!',
      message: 'U staat op het punt een noodoproep te doen. Misbruik resulteert in uitschakeling van deze functie.',
      buttons: [
        {
          text: 'LEVENSBEDREIGENDE SITUATIE',
          handler: () => {
            this.callNumber.callNumber("221", true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
          }
        },
        {
          text: 'NIET LEVENSBEDREIGEND, MAAR WEL SPOEDEISEND',
          handler: () => {
            this.navCtrl.push(VervolgschermPage);
          }
        }
      ]
    });
    alert.present();
  }


  doBell() {
    this.callNumber.callNumber("221", true)
    .then(res => this.presentToast('Launched dialer!' + res))
    .catch(err => this.presentToast('Error launching dialer' + err));


    setTimeout(() => {
      let tel = '12345678890';
      window.open(`tel:${tel}`, '_system');
    },100);
  }

  presentToast(value) {
    let toast = this.toastCtrl.create({
      message:  value,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
