import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private iab: InAppBrowser, private menuCtrl:MenuController) { }

  ngOnInit() {
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
