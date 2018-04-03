import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicijnenModalPage } from './medicijnen-modal';

@NgModule({
  declarations: [
    MedicijnenModalPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicijnenModalPage),
  ],
})
export class MedicijnenModalPageModule {}
