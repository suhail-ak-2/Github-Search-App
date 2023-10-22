import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { ProfileInformation } from '../types/types';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {
  public user: ProfileInformation = {
    avatar_url: '',
    events_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    gravatar_id: '',
    html_url: '',
    id: 0,
    login: '',
    node_id: '',
    organizations_url: '',
    received_events_url: '',
    repos_url: '',
    score: 0,
    site_admin: false,
    starred_url: '',
    subscriptions_url: '',
    type: '',
    url: ''
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((d) => {
      const id = d['id'];
      const find = this.appService.userProfiles().find((d) => d.id === parseInt(id));
      if (find && find.id) {
        this.user = find;
      }
    })
  }
}
