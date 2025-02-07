import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminusuariosComponent } from './adminusuarios/adminusuarios.component';
import { AdminmensajesComponent } from './adminmensajes/adminmensajes.component';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    AdminComponent,
    AdminusuariosComponent,
    AdminmensajesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,MatFormFieldModule,MatInputModule,
    MatInputModule,MatTableModule,MatPaginatorModule
  ]
})
export class AdminModule { }
