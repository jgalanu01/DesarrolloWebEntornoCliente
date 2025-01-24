import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Proyecto1RoutingModule } from './proyecto1-routing.module';
import { proyectoC1 } from './proyectoC1.component';



@NgModule({
  declarations: [proyectoC1],
  imports: [
    CommonModule,
    Proyecto1RoutingModule
  ]
})
export class Proyecto1Module { }
