import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaunoComponent } from './pantallauno/pantallauno.component';
import { PantalladosComponent } from './pantallados/pantallados.component';
import { PantallatresComponent } from './pantallatres/pantallatres.component';

@NgModule({
  declarations: [
    AppComponent,
    PantallaunoComponent,
    PantalladosComponent,
    PantallatresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
