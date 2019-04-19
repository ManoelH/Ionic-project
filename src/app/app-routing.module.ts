import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'principal', loadChildren: './principal/principal.module#PrincipalPageModule' },
  { path: 'rock', loadChildren: './rock/rock.module#RockPageModule' },
  { path: 'cristans', loadChildren: './cristans/cristans.module#CristansPageModule' },  { path: 'noticias-generos', loadChildren: './noticias-generos/noticias-generos.module#NoticiasGenerosPageModule' },
  { path: 'amigos', loadChildren: './amigos/amigos.module#AmigosPageModule' },
  { path: 'musicas', loadChildren: './musicas/musicas.module#MusicasPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
