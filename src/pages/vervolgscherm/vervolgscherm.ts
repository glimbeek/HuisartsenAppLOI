import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { HuisartsenpostPage } from '../huisartsenpost/huisartsenpost';
import { PatientlocatiePage } from '../patientlocatie/patientlocatie';

/**
 * Generated class for the VervolgschermPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vervolgscherm',
  templateUrl: 'vervolgscherm.html',
})
export class VervolgschermPage {

  letsel: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav: Nav) {
    this.letsel = "0";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VervolgschermPage');
  }

  doHuisArtsenPost() {
    this.navCtrl.push(HuisartsenpostPage);
  }

  doPatientLocatie () {
    this.navCtrl.push(PatientlocatiePage);
  }

}
