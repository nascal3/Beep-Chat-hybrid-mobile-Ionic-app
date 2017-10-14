import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { Account } from '../../models/account/account.interface';
import { ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  @Output() loginStatus: EventEmitter<LoginResponse>;

  account = {} as Account;

  constructor(
    private navCtrl: NavController,
    private aAuth: AngularFireAuth,
    private toast: ToastController
  ) {
    this.loginStatus = new EventEmitter<any>();
  }

  async login() {
    try {
      const result:LoginResponse = {
          result: await this.aAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      }
      this.loginStatus.emit(result);
      console.log(result);
    }catch (e){
      console.error(e);
      const error: LoginResponse = {
        error: e
      }
      this.loginStatus.emit(error);
      // this.toast.create({message: e.message, duration: 3000}).present();
    }
  }


   navigateToRegisterPage(pageName: string) {
    this.navCtrl.push(pageName);
  }

}
