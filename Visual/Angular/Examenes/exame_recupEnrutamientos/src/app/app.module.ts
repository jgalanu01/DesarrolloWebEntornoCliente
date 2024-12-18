import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DamComponent } from './dam/dam.component';
import { DawComponent } from './daw/daw.component';
import { AsirComponent } from './asir/asir.component';
import { DwecComponent } from './daw/dwec/dwec.component';
import { DwesComponent } from './daw/dwes/dwes.component';
import { DiwComponent } from './daw/diw/diw.component';
import { ProgramacionComponent } from './dam/programacion/programacion.component';
import { BaseDeDatosComponent } from './dam/base-de-datos/base-de-datos.component';
import { EntonosDeDesarrolloComponent } from './dam/entonos-de-desarrollo/entonos-de-desarrollo.component';
import { AdminSistemasOperativosComponent } from './asir/admin-sistemas-operativos/admin-sistemas-operativos.component';
import { RedesLocalesComponent } from './asir/redes-locales/redes-locales.component';
import { ServiciosRedInternetComponent } from './asir/servicios-red-internet/servicios-red-internet.component';
import { SeguridadInformaticaComponent } from './asir/seguridad-informatica/seguridad-informatica.component';
import { AccesoADatosComponent } from './dam/acceso-a-datos/acceso-a-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    DamComponent,
    DawComponent,
    AsirComponent,
    DwecComponent,
    DwesComponent,
    DiwComponent,
    ProgramacionComponent,
    BaseDeDatosComponent,
    EntonosDeDesarrolloComponent,
    AdminSistemasOperativosComponent,
    RedesLocalesComponent,
    ServiciosRedInternetComponent,
    SeguridadInformaticaComponent,
    AccesoADatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
