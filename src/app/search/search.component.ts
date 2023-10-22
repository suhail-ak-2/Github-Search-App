import { Component, OnInit } from '@angular/core';
import { Octokit, App } from 'octokit';
import { environment } from 'src/environments/environment';
import { ProfileInformation } from '../types/types';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchTerm: string = '';
  private octokit: Octokit;
  public loading = false;
  public searchResults: ProfileInformation[] = [];

  constructor(private appService: AppService) {
    this.octokit = new Octokit({
      auth: environment.patToken
    });
  }

  ngOnInit(): void {}

  async searchUsers() {
    this.loading = true;
    this.octokit.request(`GET /search/users?q=${this.searchTerm}`).then((data: { data: { items: ProfileInformation[]; }; }) => {
      if (data.data && data.data.items) {
        this.loading = false;
        this.searchResults = data.data.items;
        this.appService.updateProfiles(this.searchResults);
      }
    }).catch((err: any) => {
      console.log(err);
    })
  }
}
