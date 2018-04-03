import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgCalendarModule  } from 'ionic2-calendar';

// Pages
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup'
import { HomePage } from '../pages/home/home';
import { SpoedPage } from '../pages/spoed/spoed';
import { TelefoonPage } from '../pages/telefoon/telefoon';
import { VervolgschermPage } from '../pages/vervolgscherm/vervolgscherm';
import { HelpPage } from '../pages/help/help';
import { ProfielPage } from '../pages/profiel/profiel';
import { HuisartsenpostPage } from '../pages/huisartsenpost/huisartsenpost';
import { PatientlocatiePage } from '../pages/patientlocatie/patientlocatie';
import { ChatPage } from '../pages/chat/chat';
import { ConsultPage } from '../pages/consult/consult';
import { VerwijzingPage } from '../pages/verwijzing/verwijzing';
import { BloedonderzoekPage } from '../pages/bloedonderzoek/bloedonderzoek';
import { BerichtenPage } from '../pages/berichten/berichten';
import { EpdPage } from '../pages/epd/epd';
import { MedicijnenPage } from '../pages/medicijnen/medicijnen';
import { AanvraagPage } from '../pages/aanvraag/aanvraag';
import { ConsultklachtPage } from '../pages/consultklacht/consultklacht';
import { MedicijnenModalPage } from '../pages/medicijnen-modal/medicijnen-modal';

// Providers
import { DataProvider } from '../providers/data/data';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/*
 * ToDo:
 * 
 * Inzendopgave 255S7 tekst goed doornemen en kijken of we niets missen
 * 
 */ 

/*
 * **** Common Cordova / Ionic build errors **** 
 * https://docs.buddybuild.com/troubleshooting/frameworks/cordova_ionic.html
 * 
 * Known problem: --livereload not working cordova.js doesn't get loaded: 
 *  - https://github.com/ionic-team/ionic-app-scripts/issues/467
 *  - https://github.com/ionic-team/ionic-app-scripts/issues/1380 
 * 
 * 
 * Unable to uninstall a plugin because of something related to android or ios?
 * - Uninstall the platform: $ ionic cordova platform rm <platform>
 * - Uninstall the plugin
 * - Install the platform
 * 
 * WARNING: (node:8812) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): CordovaError: Cannot find plugin.xml for plugin "cordova-plugin-ionic". Please try adding it again.
 * - npm uninstall -g ionic cordova
 * - npm install -g ionic cordova
 * 
 * In general after doing INSTALLs or UNISTALLs to the PLATFORM, PLUGINS, etc.. 
 * - ionic cordova prepare
 * - .\platforms\android\cordova\clean
 * - npm rebuild node-sass
 * 
 * 
 * Upload changes to GIT, IONIC builds a new version viewable in IONIC VIEW:
 * $ git push -u origin master
 * 
 */

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    SignupPage,
    HomePage,
    SpoedPage,
    TelefoonPage,
    VervolgschermPage,
    HelpPage,
    ProfielPage,
    HuisartsenpostPage,
    PatientlocatiePage,
    ChatPage,
    ConsultPage,
    VerwijzingPage,
    BloedonderzoekPage,
    BerichtenPage,
    EpdPage,
    MedicijnenPage,
    AanvraagPage,
    ConsultklachtPage,
    MedicijnenModalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    SignupPage,
    HomePage,
    SpoedPage,
    TelefoonPage,
    VervolgschermPage,
    HelpPage,
    ProfielPage,
    HuisartsenpostPage,
    PatientlocatiePage,
    ChatPage,
    ConsultPage,
    VerwijzingPage,
    BloedonderzoekPage,
    BerichtenPage,
    EpdPage,
    MedicijnenPage,
    AanvraagPage,
    ConsultklachtPage,
    MedicijnenModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
