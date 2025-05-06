import { Component } from '@angular/core';
import { ClaseEmpleados } from '../clase-empleados';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-listado-tabla',
  templateUrl: './listado-tabla.component.html',
  styleUrls: ['./listado-tabla.component.css']
})
export class ListadoTablaComponent {
  listadoEmpleados!:ClaseEmpleados[];


  constructor (private http:ServicioService){
    this.http.leerEmpleados().subscribe(x=>this.listadoEmpleados=x);

  }

}
