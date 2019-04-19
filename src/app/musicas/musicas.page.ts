import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.page.html',
  styleUrls: ['./musicas.page.scss'],
})
export class MusicasPage implements OnInit {

  constructor(private menuCtrl:MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  public form = [
    { val: 'Axé', isChecked: false },
    { val: 'Black Music', isChecked: false },
    { val: 'Blues', isChecked: false },
    { val: 'Classic Rock', isChecked: false },
    { val: 'Clássico', isChecked: false },
    { val: 'Country', isChecked: false },
    { val: 'Dance', isChecked: false },
    { val: 'Eletrônica', isChecked: false },
    { val: 'Emocore', isChecked: false },
    { val: 'Folk', isChecked: false },
    { val: 'Forró', isChecked: false },
    { val: 'Funk', isChecked: false },
    { val: 'Gospel/Religioso', isChecked: false },
    { val: 'Hard Rock', isChecked: false },
    { val: 'Hardcore', isChecked: false },
    { val: 'Heavy Metal', isChecked: false },
    { val: 'Hip Hop/Rap', isChecked: false },
    { val: 'Infantil', isChecked: false }
  ];
}
