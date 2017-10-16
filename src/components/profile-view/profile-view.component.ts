import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../providers/data/data.service';
import {AuthService} from '../../providers/auth/auth.service';
import {User} from "firebase";
import {Profile} from "../../models/profile/profile.interfacer";
import {LoadingController, Loading} from "ionic-angular";

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit{
 @Output() existingProfile = new EventEmitter<Profile>();
 public userProfile: Profile;
 private loader: Loading;

  constructor(
    private data: DataService,
    private auth: AuthService,
    private loading: LoadingController
  ) {
    this.loader = this.loading.create({content: 'Loading profile...'});
  }

  ngOnInit() {
    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
        this.data.getProfile(user).subscribe(profile => {
            this.userProfile = <Profile>profile.payload.val();
             this.existingProfile.emit(this.userProfile);
            this.loader.dismiss();
        })
    });
  }

}
