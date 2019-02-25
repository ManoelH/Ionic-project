import { Component, OnInit, ViewChild } from '@angular/core';

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
  mensagem;

  login() {
    if(this.user.email === 'teste@teste.com' && this.user.senha === '123asd'){
      this.mensagem = '';
    }
    else if(this.user.email != '' && this.user.senha != ''){
      this.mensagem = 'EMAIL OU SENHA ESTÃO INCORRETOS!';
    }
  }
  ngOnInit() {
    
  }
}
