import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { proyectoC2 } from './proyectoC2.component';

import { Proyecto2RoutingModule } from './proyecto2-routing.module';


@NgModule({
  declarations: [HeaderComponent,FooterComponent,proyectoC2],
  imports: [
    CommonModule,
    Proyecto2RoutingModule
  ]
})
export class Proyecto2Module { }
