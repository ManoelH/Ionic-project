import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  user = {
    email:"",
    senha:"",
    telefone:""
  }

  senha2;
  
  formulario: FormGroup; 
  
  constructor(private formBuilder: FormBuilder, private rounter: Router, private toast:ToastController, private usuarioService:UsuarioService) {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha:['', [Validators.required, Validators.minLength(6)]],
      senha2:['', [Validators.required, Validators.minLength(6)]],
      telefone:['',[Validators.required]]
    });
}

async presentToast() {
  const toast = await this.toast.create({
    message: 'ERRO! AS SENHAS NÃO COINCIDEM',
    duration: 2000,
    position: 'top',
    animated: true,
    color: 'danger'
  });
  toast.present();
}

  cadastrar(){
    if(this.user.senha === this.senha2){
      this.usuarioService.insert(this.user);
      console.log("CADASTROU");
    }
    else{
      this.presentToast();
    }
}


  ngOnInit() {
  }

}
