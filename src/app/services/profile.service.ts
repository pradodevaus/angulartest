import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable()
export class ProfileService {

  currentProfileKey = 'CurrentProfile';

  constructor() { }

  saveProfile(profile: Profile) {
    localStorage.setItem(this.currentProfileKey, JSON.stringify(profile));
  }

  getProfile() {
    return JSON.parse(localStorage.getItem(this.currentProfileKey)) as Profile;
  }

  deleteProfile() {
    localStorage.removeItem(this.currentProfileKey);
  }
}
