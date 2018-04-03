import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MedicijnenModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicijnen-modal',
  templateUrl: 'medicijnen-modal.html',
})
export class MedicijnenModalPage {

  titleParam: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              params: NavParams) {
                  this.titleParam = params.get('titleParam');
               
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicijnenModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
