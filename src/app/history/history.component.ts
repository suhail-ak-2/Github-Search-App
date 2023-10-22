import { Component } from '@angular/core';
import { ProfileInformation } from '../types/types';
import { AppService } from '../app.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  public searchHistory: ProfileInformation[] = [];

  constructor(
    private appService: AppService,
  ) {
    this.searchHistory = appService.userProfiles();
  }

  deleteProfiles(user: ProfileInformation) {
    const index = this.appService.userProfiles().indexOf(user);
    if(index > -1) this.appService.userProfiles().splice(index, 1);
  }
}
