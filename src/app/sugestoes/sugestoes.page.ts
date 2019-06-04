import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sugestoes',
  templateUrl: './sugestoes.page.html',
  styleUrls: ['./sugestoes.page.scss'],
})
export class SugestoesPage implements OnInit {

  constructor(private menuCtrl:MenuController) {}

  public artistas = [];

  ngOnInit() {
    this.buscaArtistas();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  public buscaArtistas(){
    let db = firebase.database();
    //let userID = firebase.auth().currentUser.uid;
    db.ref('artistas').once('value').then(snapshot => {
      snapshot.forEach(todosArtistas => {
        this.artistas.push(todosArtistas.val());
        
        //if(this.estilosMusicaisUsuario.length > 0)
        //  this.form = this.estilosMusicaisUsuario;  
      });
      console.log(this.artistas)
    });
  }
}
