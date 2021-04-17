import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

import { PrincipalComponent } from './principal/principal.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { InicioComponent } from './pedacos/inicio/inicio.component';
import { RecomendacaoComponent } from './pedacos/recomendacao/recomendacao.component';
import { ApeloComponent } from './pedacos/apelo/apelo.component';
import { MenuComponent } from './pedacos/menu/menu.component';
import { ContatoComponent } from './pedacos/contato/contato.component';
import { OpcaoComponent } from './formularios/opcao/opcao.component';
import { ContadorComponent } from './componente/contador/contador.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    NavegadorComponent,
    InicioComponent,
    RecomendacaoComponent,
    ApeloComponent,
    MenuComponent,
    ContatoComponent,
    OpcaoComponent,
    ContadorComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    CarouselModule,
    FontAwesomeModule,

    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [PrincipalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
