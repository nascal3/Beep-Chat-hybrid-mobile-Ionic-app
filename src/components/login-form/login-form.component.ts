import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account } from '../../models/account/account.interface';
import { ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import {AuthService } from '../../providers/auth/auth.service';

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
    private toast: ToastController,
    private authSrv: AuthService
  ) {
    this.loginStatus = new EventEmitter<any>();
  }

  async login() {
    const loginResponse = await this.authSrv.signInWithEmailAndPassword(this.account)
    this.loginStatus.emit(loginResponse);
  }


   navigateToRegisterPage(pageName: string) {
    this.navCtrl.push(pageName);
  }

}
