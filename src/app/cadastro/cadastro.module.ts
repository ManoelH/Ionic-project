import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ServicesModule } from '../services/services.module';

import { IonicModule } from '@ionic/angular';

import { CadastroPage } from './cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule {}
