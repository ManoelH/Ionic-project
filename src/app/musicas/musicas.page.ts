import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AdMobFree } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.page.html',
  styleUrls: ['./musicas.page.scss'],
})
export class MusicasPage implements OnInit {

  constructor(private menuCtrl:MenuController, private adMobFree:AdMobFree) { 
    this.atualizaCheckboxEstilosMusicais();
  }

  ngOnInit() {
    this.adMobFree.banner.config({
      id: 'ca-app-pub-9800755908104997/5070761726',
      isTesting:true, 
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
    { val: 'Infantil', isChecked: false }
  ];

  public styleMusic = [];
  public styleMusicUser = [];

  public atualizaCheckboxEstilosMusicais(){
    this.buscaEstilosMusicais();
//    console.log(this.styleMusic)
    this.buscaEstilosMusicaisUsuario();
//    console.log(this.styleMusicUser)
    for(var i = 0; i < this.styleMusicUser.length; i++){
      for(var j = 0; j < this.styleMusic.length; j++){
        if(this.styleMusicUser[i].val == this.styleMusic[j].val)
          this.styleMusic[j].isChecked = true;
      }
    }
    console.log(this.styleMusic);
  }

  public buscaEstilosMusicais(){
    let db = firebase.database();
    db.ref('estilos_musicais').once('value').then(snapshot => {
      snapshot.forEach(estiloMusical => {
        this.styleMusic.push(estiloMusical.val());
      });
    });
  }

  public buscaEstilosMusicaisUsuario(){
    let db = firebase.database();
    let userID = firebase.auth().currentUser.uid;
    db.ref('estilos_usuarios').child(userID).once('value').then(snapshot => {
      snapshot.forEach(estiloMusical => {
        this.styleMusicUser.push(estiloMusical.val());
      });
    });
  }

  public selecionarEstiloMusical(){
    // let db = firebase.database();
    // db.ref('estilos_musicais').set(this.form)
    let estilosEscolhidos = this.form.filter(function(valor, indice, array){
      if(valor.isChecked==true){
        return valor.val
      }
    });

    let db = firebase.database();
    let userID = firebase.auth().currentUser.uid;
    let estilos = {
      estilos: estilosEscolhidos
    }
    db.ref('estilos_usuarios').child(userID).set(estilosEscolhidos)
  }
}
