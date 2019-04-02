import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-noticias-generos',
  templateUrl: './noticias-generos.page.html',
  styleUrls: ['./noticias-generos.page.scss'],
})
export class NoticiasGenerosPage implements OnInit {

  constructor(private menuCtrl:MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  } 
}
