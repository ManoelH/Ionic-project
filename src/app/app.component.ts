import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    var firebaseConfig = {
      apiKey: "AIzaSyDtibFP0wnv7L6HbaQBknP-Hc-HUMarjT0",
      authDomain: "songs-50230.firebaseapp.com",
      databaseURL: "https://songs-50230.firebaseio.com",
      projectId: "songs-50230",
      storageBucket: "songs-50230.appspot.com",
      messagingSenderId: "145530453760",
      appId: "1:145530453760:web:5b33005ef4496b81"
    };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
  
  public logout(){
    firebase.auth().signOut();
    console.log("logout")
  }
}
