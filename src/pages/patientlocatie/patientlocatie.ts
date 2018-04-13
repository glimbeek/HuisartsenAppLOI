import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';


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
  errorMessage: string = "";


 // google maps zoom level
  zoom: number = 16;  

  // initial center position for the map
  lat: number = 52.370216;
  lng: number = 4.895168;
  location: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private geolocation: Geolocation,
              public toastCtrl: ToastController) {

    this.locatie = "";

    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
     }).catch((error) => {
       this.errorMessage = 'Error getting location' + error + ' Please try again.';
       console.log('Error getting location:', error);
       this.showToast(this.errorMessage);
     });

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


  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present(toast);
  }

}
