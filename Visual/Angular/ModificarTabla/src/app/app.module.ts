import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CuadroDialogoEmpleadoComponent } from './cuadro-dialogo-empleado/cuadro-dialogo-empleado.component';

import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogoComponent } from './dialogo/dialogo.component';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    CuadroDialogoEmpleadoComponent,
    DialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,MatDialogModule,MatInputModule,MatButtonModule,HttpClientModule,MatPaginatorModule,FormsModule,MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
