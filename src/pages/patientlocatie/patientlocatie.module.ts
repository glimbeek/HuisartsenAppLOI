import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientlocatiePage } from './patientlocatie';

@NgModule({
  declarations: [
    PatientlocatiePage,
  ],
  imports: [
    IonicPageModule.forChild(PatientlocatiePage),
  ],
})
export class PatientlocatiePageModule {}
