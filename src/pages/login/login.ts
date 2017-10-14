import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private toast: ToastController
  ) {
  }

  login(event: LoginResponse) {
    if (!event.error) {
      this.navCtrl.setRoot('ProfilePage');
      this.toast.create({message:`Welcome to beep, ${event.result.email}`, duration: 3000}).present();
    }else {
      this.toast.create({message:event.error.message, duration: 3000}).present()
    }
  }

}
