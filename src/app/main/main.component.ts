import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    console.log('From main module');
    const profileData = this.profileService.getProfile();

    if (profileData) {
      this.router.navigate(['/view']);
    }
  }

}
