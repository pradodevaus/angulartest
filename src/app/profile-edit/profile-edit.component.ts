import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';

import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';
import { GeoCoords } from '../models/geo-coords';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  profileForm: FormGroup;

  locMarker: GeoCoords;

  initMapCoords: GeoCoords;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const profileData = this.route.snapshot.data['editMode'] ? this.profileService.getProfile() : null;
    this.createForm(profileData);
    this.initMapCoords = profileData ?  profileData.geoLoc : {lat: -37.8274134, lng: 144.9352466};
    this.locMarker = profileData && profileData.geoLoc;
  }

  private createForm(profileData: Profile) {
    this.profileForm = this.fb.group({
      firstName: [profileData && profileData.firstName, [Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')]],
      lastName: [profileData && profileData.lastName, [Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*')]],
      email: [profileData && profileData.email, [Validators.required, Validators.email]],
      dob: [profileData && profileData.dob, [Validators.required]],
      loc: [profileData && profileData.geoLoc, [Validators.required]]
    });
  }

  saveProfile() {
    console.dir(this.profileForm);

    const profileFormData = this.profileForm.value;

    // map form values to Profile model
    const profileData = new Profile(profileFormData.firstName, profileFormData.lastName,
      profileFormData.email, profileFormData.dob, profileFormData.loc);
    this.profileService.saveProfile(profileData);

    // Once profile data is saved, redirect to main
    this.router.navigate(['/main']);
  }

  getFC(name) {
    return this.profileForm.controls[name];
  }

  chooseLoc(coords) {
    this.locMarker = {lat: coords.lat, lng: coords.lng};
    this.getFC('loc').setValue(this.locMarker);
  }

}
