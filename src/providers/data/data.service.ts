import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interfacer';
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import {AuthService} from "../auth/auth.service";
import {database} from "firebase";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataService {

  profileObject: AngularFireObject<Profile>;
  profileList: AngularFireList<Profile>;

  constructor(
    private authService: AuthService,
    private database: AngularFireDatabase
  ) {  }

  searchUser(firstName: string) {
    const query = this.database.list('/profiles', query => query.orderByChild('firstName').equalTo(firstName))
    return query.valueChanges();
  }

  getProfile(user: User) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    return this.profileObject.snapshotChanges();
  }

  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);

    try {
      await this.profileObject.set(profile);
      return true;
    }catch (e) {
      console.error(e);
      return false;
    }

  }

  setUserOnline(profile: Profile) {
    const ref  = database().ref(`online-users/${profile.$key}`);

    try {
      ref.update({...profile});
      ref.onDisconnect().remove();
    }catch (e){
      console.error(e);
    }
  }

  getOnlineUsers() {
    return this.database.list(`online-users`).valueChanges();
  }

}
