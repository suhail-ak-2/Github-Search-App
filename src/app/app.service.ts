import { Injectable, signal } from '@angular/core';
import { ProfileInformation } from './types/types';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public userProfiles = signal<ProfileInformation[]>([]);
  constructor() {
    const searchHistory = localStorage.getItem('userProfiles');
    if(searchHistory) {
      this.setProfilesFromLocal(searchHistory);
    }
  }

  setProfilesFromLocal(searchHistory: string) {
    try {
      const profiles = JSON.parse(searchHistory);
      this.userProfiles = signal<ProfileInformation[]>(profiles);
    } catch (err) {
      console.log(err)
    }
  }

  updateProfiles(profiles: ProfileInformation[]) {
    const uniqueProfiles = [...new Set([...this.userProfiles(), ...profiles].map((object) => object))];
    this.userProfiles.set(uniqueProfiles);
  }
}
