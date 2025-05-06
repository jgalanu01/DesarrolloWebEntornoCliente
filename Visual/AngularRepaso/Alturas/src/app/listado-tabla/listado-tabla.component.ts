import { Component } from '@angular/core';
import { ClaseAltura } from '../clase-altura';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-listado-tabla',
  templateUrl: './listado-tabla.component.html',
  styleUrls: ['./listado-tabla.component.css']
})
export class ListadoTablaComponent {
  listadoAlturas!: ClaseAltura[];

  constructor(private http:ServicioService){
    this.http.leerAlturas().subscribe(x=>this.listadoAlturas=x);
  }


}
