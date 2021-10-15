import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { CardComponent } from './components/card/card.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { CervejasComponent } from './pages/cervejas/cervejas.component';
import { RoutesModule } from './routes/routes.module';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CardComponent,
    CardapioComponent,
    CervejasComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RoutesRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
