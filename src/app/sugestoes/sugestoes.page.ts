import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sugestoes',
  templateUrl: './sugestoes.page.html',
  styleUrls: ['./sugestoes.page.scss'],
})
export class SugestoesPage implements OnInit {

  constructor(private menuCtrl:MenuController, private toastController:ToastController) {}

  public artistas = [];

    // public usuario_artistas_seguidos = [
    //   {idUsuario: 'fefse'},
    //   {artistaSeguidos: 
    //     [{
    //       idArtista: 'weed'}, {idArtista: 'weed'}
    //     ] }
    //   ]

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

  public seguirArtista(artista){
    this.presentToast(artista);
  }

  async presentToast(artista) {
    const toast = await this.toastController.create({
      message: `${artista} foi seguido com sucesso`,
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }
}
