import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AromaticaRoutingModule } from './aromatica-routing.module';
import { OreganoComponent } from './oregano/oregano.component';
import { PerejilComponent } from './perejil/perejil.component';
import { MentaComponent } from './menta/menta.component';


@NgModule({
  declarations: [
    OreganoComponent,
    PerejilComponent,
    MentaComponent
  ],
  imports: [
    CommonModule,
    AromaticaRoutingModule
  ]
})
export class AromaticaModule { }
