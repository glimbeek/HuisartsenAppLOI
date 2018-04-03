import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConsultklachtPage } from '../consultklacht/consultklacht';

/**
 * Generated class for the AanvraagPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aanvraag',
  templateUrl: 'aanvraag.html',
})
export class AanvraagPage {

  showMeKort: boolean = false;
  showMeLang: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AanvraagPage');
  }

  doConsult(value): void {
    if (value == 'kort') {
      this.showMeKort = true;
      this.showMeLang = false;
    }
    else {
      this.showMeKort = false;
      this.showMeLang = true;
    }
  }

  doConsultKlacht() {
    this.navCtrl.push(ConsultklachtPage);
  }

}
