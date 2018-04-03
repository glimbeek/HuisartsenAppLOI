import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../home/home';
import { HelpPage } from '../help/help';
import { ProfielPage } from '../profiel/profiel';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HelpPage;
  tab3Root = ProfielPage;

  tab1Title: string;
  tab2Title: string;
  tab3Title: string;

  constructor(public translate: TranslateService) {
    this.getTabTitles();

  }

  ionViewDidLoad() {
    
  }

  getTabTitles() {
    this.translate.get('TABSNAV.HOME').subscribe(
      value => {
        this.tab1Title = value;
      }
    )
    
    this.translate.get('TABSNAV.HELP').subscribe(
      value => {
        this.tab2Title = value;
      }
    )

    this.translate.get('TABSNAV.PROFILE').subscribe(
      value => {
        this.tab3Title = value;
      }
    )

  }
}
