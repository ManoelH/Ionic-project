import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MusicasPage } from './musicas.page';
import { AdMobFree, AdMobFreeBanner } from '@ionic-native/admob-free/ngx';



const routes: Routes = [
  {
    path: '',
    component: MusicasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MusicasPage],
  providers: [AdMobFree, AdMobFreeBanner]

})
export class MusicasPageModule {}
