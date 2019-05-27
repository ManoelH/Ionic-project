import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PrincipalPage } from './principal.page';
import { AdMobFree, AdMobFreeBanner } from '@ionic-native/admob-free/ngx';
import { FCM } from '@ionic-native/fcm/ngx';


const routes: Routes = [
  {
    path: '',
    component: PrincipalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrincipalPage],
  providers: [AdMobFree, AdMobFreeBanner, FCM],
})
export class PrincipalPageModule {}
