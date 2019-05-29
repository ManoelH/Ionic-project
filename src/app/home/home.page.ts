import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
//import { UsuarioService } from '../services/usuario.service';
import * as firebase from 'firebase';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  user = {
    email:"",
    senha:""
  }
  mensagem = "";  
  formulario: FormGroup; 
  form = [];
       constructor(private formBuilder: FormBuilder, private rounter: Router, private menuCtrl:MenuController, private toast:ToastController){
          this.formulario = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            senha:['', [Validators.required, Validators.minLength(6)]],
      });
  
    } 

    ionViewWillEnter() {
      this.menuCtrl.enable(false);
    }  
    
    async presentToast() {
      const toast = await this.toast.create({
        message: 'EMAIL OU SENHA ESTÃO INCORRETOS!',
        duration: 2000,
        position: 'top',
        animated: true,
        color: 'danger'
      });
      toast.present();
    }

    async login(){

      firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.senha)
        .then(usuarioLogado => {
          
            firebase.auth().onAuthStateChanged(usuarioLogado =>{
              if(usuarioLogado != null){
                //this.buscaEstilosMusicais();
                //this.selecionarEstiloMusical();
                this.rounter.navigateByUrl('principal');      
              }
            })
        }).catch(erro => {
          this.presentToast();
      })
       //let logado = await this.usuarioService.logar(this.user.email, this.user.senha);     
      // if(logado){
      //  this.rounter.navigateByUrl('principal');
      // }
      // else{
      //   this.presentToast();
      // }

  }

  public buscaEstilosMusicais(){
    let db = firebase.database();
    db.ref('estilos_musicais').once('value').then(snapshot => {
      snapshot.forEach(estiloMusical => {
        this.form.push(estiloMusical.val());
      });
    });
  }
  
  public selecionarEstiloMusical(){
    let estilosEscolhidos = this.form;
    let db = firebase.database();
    let userID = firebase.auth().currentUser.uid;
    let estilos = {
      estilos: estilosEscolhidos
    }
    db.ref('estilos_usuarios').child(userID).set(estilosEscolhidos)
  }

  ngOnInit(){

  }

}
