import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrutalRoutingModule } from './frutal-routing.module';
import { CirueloComponent } from './ciruelo/ciruelo.component';
import { ManzanaComponent } from './manzana/manzana.component';
import { PeraComponent } from './pera/pera.component';


@NgModule({
  declarations: [
    CirueloComponent,
    ManzanaComponent,
    PeraComponent
  ],
  imports: [
    CommonModule,
    FrutalRoutingModule
  ]
})
export class FrutalModule { }
