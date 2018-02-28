import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileService } from './services/profile.service';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileEditComponent,
    ProfileViewComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'main', component: MainComponent },
      {path: 'create', component: ProfileEditComponent },
      {path: 'edit', component: ProfileEditComponent, data: {editMode: true} },
      {path: 'view', component: ProfileViewComponent },
      {path: '', redirectTo: '/main', pathMatch: 'full'}
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAwRAJqTCy0cQHa5cJ8f4EzJZ6ioSdpG94'
    })
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
