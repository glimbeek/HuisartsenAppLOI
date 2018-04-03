import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PatientlocatiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patientlocatie',
  templateUrl: 'patientlocatie.html',
})
export class PatientlocatiePage {
  
  locatie: any;
  showMeH1: boolean = false;
  showMeCard: boolean = false;
  hideMe: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.locatie = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientlocatiePage');
  }

  doGetLocation() {
    this.locatie = "Stationsweg 1a, Weesp";

    this.showMeH1 = true;
    this.showMeCard = true;
    this.hideMe = false;
    
  }

}
