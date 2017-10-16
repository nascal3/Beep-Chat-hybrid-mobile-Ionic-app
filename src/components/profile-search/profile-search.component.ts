import {Component, EventEmitter, Output} from '@angular/core';
import {DataService} from '../../providers/data/data.service';
import {Profile} from '../../models/profile/profile.interfacer';
import {query} from "@angular/core/src/animation/dsl";

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
  @Output() selectedProfile = new EventEmitter<Profile>();

  constructor(
    private data: DataService
  ) {

  }

  selectProfile(profile: Profile) {
      this.selectedProfile.emit(profile);
  }

  searchUser(query: string) {
      const trimmedQuery = query.trim();

      if (trimmedQuery === query) {
        this.data.searchUser(query).subscribe(profiles => {
          console.log(profiles);
          this.profileList = profiles;
        })
      }
  }

}
