import { Component } from '@angular/core';
import { Futbolista } from '../futbolista';
import { ServicioFutbolistaService } from '../servicio-futbolista.service';

@Component({
  selector: 'app-listado-futbolista',
  templateUrl: './listado-futbolista.component.html',
  styleUrls: ['./listado-futbolista.component.css']
})
export class ListadoFutbolistaComponent {
crear() {
this.http.crearFutbolista(this.futbolistaSeleccionado).subscribe(()=>{
  this.http.listadoFutbolistas().subscribe(x=>this.listarFutbolistas=x)
})
}
modificar() {
  this.http.editarFutbolista(this.futbolistaSeleccionado).subscribe(()=>{
    this.http.listadoFutbolistas().subscribe(x=>this.listarFutbolistas=x)
  })
}
futbolistaSeleccionado:Futbolista={
  nombre: '',
  equipo: '',
  nacionalidad: '',
  edad: 0,
  dorsal: 0,
  goles: 0
}

  constructor(private http:ServicioFutbolistaService){
    this.http.listadoFutbolistas().subscribe(x=>this.listarFutbolistas=x)
  }
eliminar(f:Futbolista) {
  this.http.eliminarFutbolista(f).subscribe(()=>{
    this.http.listadoFutbolistas().subscribe(x=>this.listarFutbolistas=x)
  })
;
}
seleccionar(f:Futbolista) {
this.futbolistaSeleccionado=f;
}
listarFutbolistas!:Futbolista[];

}
