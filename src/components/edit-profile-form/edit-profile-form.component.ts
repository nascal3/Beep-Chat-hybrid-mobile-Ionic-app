import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import { Profile } from '../../models/profile/profile.interfacer';
import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy{

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  profile = {} as Profile

  @Output() saveProfileResults: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private auth: AuthService,
    private data: DataService
  ) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    })
  }

  async saveProfile() {
    if (this.authenticatedUser) {
      const result =  await this.data.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResults.emit(result);
    }
  }

  ngOnDestroy() {
    this.authenticatedUser$.unsubscribe();
  }

}
