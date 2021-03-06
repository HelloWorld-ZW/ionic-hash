import { Component } from '@angular/core';

import {FriendsPage } from '../friends/friends';
import { HistoryPage } from '../history/history';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FriendsPage;
  tab3Root = HistoryPage;
  tab4Root = SettingsPage;
  constructor() {

  }
}
