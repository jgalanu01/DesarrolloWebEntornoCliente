import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatataComponent } from './patata/patata.component';
import { PimientoComponent } from './pimiento/pimiento.component';
import { TomateComponent } from './tomate/tomate.component';

const routes: Routes = [
  {
    path:'tomate',
    component:TomateComponent
  },
  {
    path:'pimiento',
    component:PimientoComponent
  },
  {
    path:'patata',
    component:PatataComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HortalizaRoutingModule { }
