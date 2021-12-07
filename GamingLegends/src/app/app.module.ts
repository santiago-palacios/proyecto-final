import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecomendadosComponent } from './components/recomendados/recomendados.component';
import { LoMasJugadoComponent } from './components/lo-mas-jugado/lo-mas-jugado.component';
import { Error404Component } from './components/error404/error404.component';
import { NuevosJuegosComponent } from './components/nuevos-juegos/nuevos-juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    RecomendadosComponent,
    LoMasJugadoComponent,
    Error404Component,
    NuevosJuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
