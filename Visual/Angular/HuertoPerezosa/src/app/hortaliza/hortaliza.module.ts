import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HortalizaRoutingModule } from './hortaliza-routing.module';
import { TomateComponent } from './tomate/tomate.component';
import { PimientoComponent } from './pimiento/pimiento.component';
import { PatataComponent } from './patata/patata.component';


@NgModule({
  declarations: [
    TomateComponent,
    PimientoComponent,
    PatataComponent
  ],
  imports: [
    CommonModule,
    HortalizaRoutingModule
  ]
})
export class HortalizaModule { }
