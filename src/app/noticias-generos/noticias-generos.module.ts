import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoticiasGenerosPage } from './noticias-generos.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasGenerosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoticiasGenerosPage]
})
export class NoticiasGenerosPageModule {}
