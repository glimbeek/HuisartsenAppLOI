import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from './../../providers/data/data';

/**
 * Generated class for the BloedonderzoekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bloedonderzoek',
  templateUrl: 'bloedonderzoek.html',
})
export class BloedonderzoekPage {

  searchTerm: string = '';
  items: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataService: DataProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerwijzingPage');
    this.setFilteredItems(); 
  }

  setFilteredItems() {
    this.items = this.dataService.filterItemsAllergies(this.searchTerm);
  }

}
