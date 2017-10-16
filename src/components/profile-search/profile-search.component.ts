import { Component } from '@angular/core';
import {DataService} from '../../providers/data/data.service';
import {Profile} from '../../models/profile/profile.interfacer';

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-profile-search',
  templateUrl: 'profile-search.component.html'
})
export class ProfileSearchComponent {

  query: string;
  profileList: any;

  constructor(
    private data: DataService
  ) {
  }

  searchUser(query: string) {
      this.data.searchUser(query).subscribe(profiles => {
        console.log(profiles);
        this.profileList = profiles;
      })
  }

}
