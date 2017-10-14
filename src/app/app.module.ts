import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { AuthService } from '../providers/auth/auth.service';

 const config = {
    apiKey: "AIzaSyAnEmU78X_EpCVZNJgj4Qf9p1dyBEAdkh8",
    authDomain: "beepchat-ec375.firebaseapp.com",
    databaseURL: "https://beepchat-ec375.firebaseio.com",
    projectId: "beepchat-ec375",
    storageBucket: "beepchat-ec375.appspot.com",
    messagingSenderId: "698024249299"
  };

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
