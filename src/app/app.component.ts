import { Component, HostListener, OnDestroy } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-search-app';

  constructor(private appService: AppService){}

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: any): void {
    const profiles = this.appService.userProfiles();
    localStorage.setItem('userProfiles', JSON.stringify(profiles));
  }
}
