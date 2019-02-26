import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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

       constructor(private formBuilder: FormBuilder, private rounter: Router){
          this.formulario = this.formBuilder.group({
           email: ['', [Validators.required, 
                 Validators.email]],
        senha:['', [Validators.required, Validators.minLength(6)]]
      });
  
    } 


  login() {
    if(this.user.email === 'teste@teste.com' && this.user.senha === '123asd'){
      this.mensagem = '';
      this.rounter.navigateByUrl('/principal');
    }
    else if(this.user.email != '' && this.user.senha != ''){
      this.mensagem = 'EMAIL OU SENHA ESTÃO INCORRETOS!';
    }
  }

  ngOnInit(){

  }

}
