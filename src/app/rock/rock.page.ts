import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.page.html',
  styleUrls: ['./rock.page.scss'],
})
export class RockPage implements OnInit {

  constructor(private menuCtrl:MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  } 
}
