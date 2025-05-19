import { Component } from '@angular/core';
import { Personajes } from '../personajes';
import { ServicioPersonajesService } from '../servicio-personajes.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})


export class ListaPersonajesComponent {
modificar() {

  this.http.modificarPersonaje(this.personajeSeleccionado).subscribe(()=>{
    this.http.leerPersonajes().subscribe(x=>this.listadoPersonajes=x);
  })


}
crear() {
  this.http.crearPersonaje(this.personajeSeleccionado).subscribe(()=>{
    this.http.leerPersonajes().subscribe(x=>this.listadoPersonajes=x);
  })


}
personajeSeleccionado:Personajes={
  nombre: '',
  afiliacion: '',
  rango: '',
  sableColor: '',
  especie: '',
  profesion: ''
}

  constructor(private http:ServicioPersonajesService){
    this.http.leerPersonajes().subscribe(x=>this.listadoPersonajes=x);

  }
eliminar(p:Personajes) {
  this.http.eliminarPersonajes(p).subscribe(()=>{
    this.http.leerPersonajes().subscribe(x=>this.listadoPersonajes=x);
  })
}
seleccionar(p:Personajes) {
  this.personajeSeleccionado=p;

}


listadoPersonajes!:Personajes[];

}
