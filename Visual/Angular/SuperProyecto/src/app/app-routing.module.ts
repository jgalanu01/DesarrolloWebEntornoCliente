import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Proyecto1Module } from './proyecto1/proyecto1.module';
import { proyectoC1 } from './proyecto1/proyectoC1.component';
import { Proyecto2Module } from './proyecto2/proyecto2.module';
import { proyectoC2 } from './proyecto2/proyectoC2.component';
import { Proyecto3Module } from './proyecto3/proyecto3.module';


const routes: Routes = [
  {
  path:'proyecto1',
  component:proyectoC1,
  loadChildren:()=>import('./proyecto1/proyecto1.module').
  then(m=>Proyecto1Module)
  },
  {
    path:'proyecto2',
    component:proyectoC2,
    loadChildren:()=>import('./proyecto2/proyecto2.module').
    then(m=>Proyecto2Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
