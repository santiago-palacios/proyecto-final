import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { LoMasJugadoComponent } from './components/lo-mas-jugado/lo-mas-jugado.component';
import { NuevosJuegosComponent } from './components/nuevos-juegos/nuevos-juegos.component';
import { RecomendadosComponent } from './components/recomendados/recomendados.component';

const routes: Routes = [
  {path:'',redirectTo:"lo-mas-jugado",pathMatch:'full'},
  {path:'lo-mas-jugado',component:LoMasJugadoComponent},
  {path:'recomendados',component:RecomendadosComponent}, 
  {path:'nuevos-juegos',component:NuevosJuegosComponent},   
  {path:'**',component:Error404Component},
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
