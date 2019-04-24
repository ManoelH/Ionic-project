import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';



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

       constructor(private formBuilder: FormBuilder, private rounter: Router, private menuCtrl:MenuController, private toast:ToastController, private usuarioService:UsuarioService){
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
       let logado = await this.usuarioService.logar(this.user.email, this.user.senha);     
      if(logado){
       this.rounter.navigateByUrl('principal');
      }
      else{
        this.presentToast();
      }
      // if(this.user.email === 'teste@teste.com' && this.user.senha === '123asd'){
      //   this.mensagem = '';
      //   this.rounter.navigateByUrl('/principal');
      // }
      // else if(this.user.email != '' || this.user.senha != ''){
      //   this.presentToast();
      // }
  }

  ngOnInit(){

  }

}
