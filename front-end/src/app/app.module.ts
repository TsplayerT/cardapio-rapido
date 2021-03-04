import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RecomendacaoComponent } from './components/recomendacao/recomendacao.component';
import { ContatoComponent } from './components/contato/contato.component';
import { MenuComponent } from './components/menu/menu.component';
import { ApeloComponent } from './components/apelo/apelo.component';
import { OpcaoComponent } from './modals/opcao/opcao.component';
import { PedidoComponent } from './modals/pedido/pedido.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RecomendacaoComponent,
    ContatoComponent,
    MenuComponent,
    ApeloComponent,
    OpcaoComponent,
    PedidoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}