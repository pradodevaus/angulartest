import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../models/profile';
import { Router } from '@angular/router';

import { ProfileService } from '../services/profile.service';
import { GeoCoords } from '../models/geo-coords';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  // @Input()
  profileData: Profile;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.profileData = this.profileService.getProfile();
  }

  deleteProfile() {
    this.profileService.deleteProfile();

    this.router.navigate(['./main']);
  }
}
