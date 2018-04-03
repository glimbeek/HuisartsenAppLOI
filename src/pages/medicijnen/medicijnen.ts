import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from './../../providers/data/data';
import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the MedicijnenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicijnen',
  templateUrl: 'medicijnen.html',
})
export class MedicijnenPage {

  items: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dataService: DataProvider,
    public actionSheetCtrl: ActionSheetController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicijnenPage');

    
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Bijsluiter',
        },{
          text: 'Nieuw recept aanvragen',

        },{
          text: 'Vraag stellen over gebruik',
        },{
          text: 'FAQ',
        }
      ]
    });
    actionSheet.present();
  }

}