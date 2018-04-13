import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the EpdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-epd',
  templateUrl: 'epd.html',
})
export class EpdPage {

  users: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public restProvider: RestProvider) {

    this.getData()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EpdPage');
    
  }

  getData() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
