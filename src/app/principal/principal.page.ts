import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AdMobFree, AdMobFreeBanner } from '@ionic-native/admob-free/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private iab: InAppBrowser, private menuCtrl:MenuController, public adMobFree:AdMobFree,
    private fcm:FCM) { }

  ngOnInit() {
      this.adMobFree.banner.config({
        id: 'ca-app-pub-9800755908104997/6257497108',
        isTesting: true,
        autoShow: true
      });
      this.adMobFree.banner.prepare();

      this.fcm.subscribeToTopic('news');

      //Salva o Token único do dispositivo(celular) do usuário no banco
this.fcm.getToken().then(token => {
  let uid = firebase.auth().currentUser.uid;
  firebase.database().ref('usuarios/'+uid).set({dispositivo:token});
});

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  
  openBlank(){
    this.iab.create('https://www.youtube.com/watch?v=qTAcq-Z_l9A&t=1448s', '_blank');
  }
  openSystem(){
    this.iab.create('https://www.youtube.com/watch?v=qTAcq-Z_l9A&t=1448s', '_system');
  }
}
