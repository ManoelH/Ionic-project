import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { Router } from '@angular/router';
import { timeout } from 'q';


@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.page.html',
  styleUrls: ['./musicas.page.scss'],
})
export class MusicasPage implements OnInit {

  constructor(private menuCtrl:MenuController, public adMobFree:AdMobFree, private toastController:ToastController,
    private router:Router) { 
    this.atualizaCheckboxEstilosMusicais();
  }

  ngOnInit() {
    this.adMobFree.banner.config({
      id: 'ca-app-pub-9800755908104997/7869853879',
      isTesting: true,
      autoShow: true
    });
    this.adMobFree.banner.prepare();
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
  { val: 'Infantil', isChecked: false }];

  public estilosMusicaisUsuario = [];

   async selecionarEstiloMusical(){
    let estilosEscolhidos = this.form;

    let db = firebase.database();
    let userID = firebase.auth().currentUser.uid;
    let estilos = {
      estilos: estilosEscolhidos
    }
    db.ref('estilos_usuarios').child(userID).set(estilosEscolhidos)
    this.presentToast();
    this.router.navigateByUrl('principal');
  }

  public atualizaCheckboxEstilosMusicais(){
    this.buscaEstilosMusicaisUsuario();

  }

  public buscaEstilosMusicaisUsuario(){
    let db = firebase.database();
    let userID = firebase.auth().currentUser.uid;
    db.ref('estilos_usuarios').child(userID).once('value').then(snapshot => {
      snapshot.forEach(estiloMusical => {
        this.estilosMusicaisUsuario.push(estiloMusical.val());
        console.log(this.estilosMusicaisUsuario.length)
        if(this.estilosMusicaisUsuario.length > 0)
          this.form = this.estilosMusicaisUsuario;  
      });
    });
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Estilos musicais atualizados com sucesso',
      duration: 2000,
      position: 'top',
      color: 'success',
      animated: true
    });
    toast.present();
  }

}
