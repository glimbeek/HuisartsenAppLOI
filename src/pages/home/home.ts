import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { ChatPage } from '../chat/chat';
import { ConsultPage } from '../consult/consult';
import { VerwijzingPage } from '../verwijzing/verwijzing';
import { BloedonderzoekPage } from '../bloedonderzoek/bloedonderzoek';
import { BerichtenPage } from '../berichten/berichten';
import { EpdPage } from '../epd/epd';
import { MedicijnenPage } from '../medicijnen/medicijnen';
import { SpoedPage } from '../spoed/spoed';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public nav: Nav) {

  }

  doChat() {
    this.navCtrl.push(ChatPage);
  }

  doConsultaanvraag() {
    this.navCtrl.push(ConsultPage);
  }

  doDoorverwijzing() {
    this.navCtrl.push(VerwijzingPage);
  }

  doBloedonderzoeks() {
    this.navCtrl.push(BloedonderzoekPage);
  }

  doBerichten() {
    this.navCtrl.push(BerichtenPage);
  }

  doEPD() {
    this.navCtrl.push(EpdPage);
  }

  doMedicijnen() {
    this.navCtrl.push(MedicijnenPage);
  }

  doSpoed() {
    this.navCtrl.push(SpoedPage);
  }

}
