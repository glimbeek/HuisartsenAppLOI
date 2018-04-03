import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AanvraagPage } from './aanvraag';

@NgModule({
  declarations: [
    AanvraagPage,
  ],
  imports: [
    IonicPageModule.forChild(AanvraagPage),
  ],
})
export class AanvraagPageModule {}
