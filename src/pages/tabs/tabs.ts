import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { DiscoverPage } from '../discover/discover';
import { CalendarPage } from '../calendar/calendar';


@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = DiscoverPage;
  tab3Root: any = CalendarPage;

  constructor() {
  }

}
