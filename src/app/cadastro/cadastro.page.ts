import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
//import { UsuarioService } from '../services/usuario.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  user = {
    email:"",
    senha:"",
  }

  senha2;
  
  formulario: FormGroup; 
  
  constructor(private formBuilder: FormBuilder, private rounter: Router, private toast:ToastController) {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha:['', [Validators.required, Validators.minLength(6)]],
      senha2:['', [Validators.required, Validators.minLength(6)]],
      telefone:['',[Validators.required]]
    });
}

async presentToast(mensagem, cor) {
  const toast = await this.toast.create({
    message: mensagem,
    duration: 2000,
    position: 'top',
    animated: true,
    color: cor
  });
  toast.present();
}

  cadastrar(){
    if(this.user.senha === this.senha2){
      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.senha)
      .then(usuarioLogado => {
          this.presentToast('CADASTRADO COM SUCESSO!', 'success');
        }).catch(erro => {
          this.presentToast('ERRO AO CADASTRAR USUÁRIO!', 'danger');
      })
      //this.usuarioService.insert(this.user);
      this.rounter.navigateByUrl('home');
    }
    else{
      this.presentToast('AS SENHAS NÃO COINCIDEM!', 'danger');
    }
}  

  ngOnInit() {
  }

}
