import { Component, OnInit } from '@angular/core';
import {DataService} from "../../providers/data/data.service";
import {AuthService} from "../../providers/auth/auth.service";
import {Profile} from "../../models/profile/profile.interfacer";
import {User} from "firebase";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-online-users',
  templateUrl: 'online-users.component.html'
})
export class OnlineUsersComponent implements OnInit{

  text: string;
  public userProfile: Profile;
  userList: Observable<Profile[]>;

  constructor(
    private data: DataService,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.setUserOnline();
    this.getOnlineUsers();
  }

  setUserOnline() {
   this.auth.getAuthenticatedUser().subscribe((user: User) => {
        this.data.getProfile(user).subscribe(profile => {
            this.userProfile = <Profile>profile.payload.val();
            // set user online in Firebase
            this.data.setUserOnline(this.userProfile);
        })
    });
  }

  getOnlineUsers() {
    this.userList = this.data.getOnlineUsers();
  }

}
