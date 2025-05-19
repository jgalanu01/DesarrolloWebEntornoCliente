import { Component } from '@angular/core';
import { Futbolistas } from '../futbolistas';
import { ServicioFutbolistasService } from '../servicio-futbolistas.service';

@Component({
  selector: 'app-listado-futbolistas',
  templateUrl: './listado-futbolistas.component.html',
  styleUrls: ['./listado-futbolistas.component.css']
})
export class ListadoFutbolistasComponent {
modificar() {
  this.http.modificarFutbolista(this.futbolistaSeleccionado).subscribe(()=>{
    this.http.leerFutbolistas().subscribe(x=>this.listadoFutbolistas=x);
  })

}
futbolistaSeleccionado:Futbolistas={
  nombre: '',
  equipo: '',
  nacionalidad: '',
  edad: 0,
  dorsal: 0,
  goles: 0
}

  constructor(private http:ServicioFutbolistasService){
    this.http.leerFutbolistas().subscribe(x=>this.listadoFutbolistas=x);

  }
eliminar(f:Futbolistas) {
  this.http.eliminarFutbolista(f).subscribe(()=>{
    this.http.leerFutbolistas().subscribe(x=>this.listadoFutbolistas=x);
  })
}
seleccionar(f:Futbolistas) {
  this.futbolistaSeleccionado=f;

}

crear(){
  this.http.crearFutbolista(this.futbolistaSeleccionado).subscribe(()=>{
    this.http.leerFutbolistas().subscribe(x=>this.listadoFutbolistas=x);
  })
}
listadoFutbolistas!: Futbolistas[];

}
