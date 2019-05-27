import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
//import { UsuarioService } from '../services/usuario.service';
import * as firebase from 'firebase';
import { FCM } from '@ionic-native/fcm/ngx';



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

       constructor(private formBuilder: FormBuilder, private rounter: Router, private menuCtrl:MenuController, private toast:ToastController,
      private fcm:FCM){
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

  ngOnInit(){
    this.fcm.subscribeToTopic('novas_noticias');

    //Salva o Token único do dispositivo(celular) do usuário no banco
    this.fcm.getToken().then(token => {
    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref('usuarios/'+uid).set({dispositivo:token});
    });
  }

}
