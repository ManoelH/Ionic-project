import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CristansPage } from './cristans.page';

const routes: Routes = [
  {
    path: '',
    component: CristansPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CristansPage]
})

@Component({
  selector: 'app-cristans',
  templateUrl:'cristans.page.html',   
  styleUrls:  ['cristans.page.scss'],
})

export class CristansPageModule {
  
}
