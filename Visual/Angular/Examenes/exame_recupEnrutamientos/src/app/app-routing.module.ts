import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DamComponent } from './dam/dam.component';
import { DawComponent } from './daw/daw.component';
import { AsirComponent } from './asir/asir.component';
import { DwecComponent } from './daw/dwec/dwec.component';
import { DwesComponent } from './daw/dwes/dwes.component';
import { DiwComponent } from './daw/diw/diw.component';
import { DespliegueComponent } from './daw/despliegue/despliegue.component';
import { ProgramacionComponent } from './dam/programacion/programacion.component';
import { BaseDeDatosComponent } from './dam/base-de-datos/base-de-datos.component';
import { EntonosDeDesarrolloComponent } from './dam/entonos-de-desarrollo/entonos-de-desarrollo.component';
import { AccesoADatosComponent } from './dam/acceso-a-datos/acceso-a-datos.component';
import { AdminSistemasOperativosComponent } from './asir/admin-sistemas-operativos/admin-sistemas-operativos.component';
import { RedesLocalesComponent } from './asir/redes-locales/redes-locales.component';
import { ServiciosRedInternetComponent } from './asir/servicios-red-internet/servicios-red-internet.component';
import { SeguridadInformaticaComponent } from './asir/seguridad-informatica/seguridad-informatica.component';

const routes: Routes = [
  { path: '', redirectTo: '/dam', pathMatch: 'full' },
  { path: 'dam', component: DamComponent, children: [
      { path: 'programacion', component: ProgramacionComponent },
      { path: 'bases-de-datos', component: BaseDeDatosComponent },
      { path: 'entornos-de-desarrollo', component: EntonosDeDesarrolloComponent },
      { path: 'acceso-a-datos', component: AccesoADatosComponent }
    ]
  },
  { path: 'daw', component: DawComponent, children: [
      { path: 'dwec', component: DwecComponent },
      { path: 'dwes', component: DwesComponent },
      { path: 'diw', component: DiwComponent },
      { path: 'despliegue', component: DespliegueComponent }
    ]
  },
  { path: 'asir', component: AsirComponent, children: [
      { path: 'admin-sistemas-operativos', component: AdminSistemasOperativosComponent },
      { path: 'redes-locales', component: RedesLocalesComponent },
      { path: 'servicios-red-internet', component: ServiciosRedInternetComponent },
      { path: 'seguridad-informatica', component: SeguridadInformaticaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
