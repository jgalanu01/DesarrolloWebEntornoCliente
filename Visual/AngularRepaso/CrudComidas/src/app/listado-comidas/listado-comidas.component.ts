import { Component } from '@angular/core';
import { Comidas } from '../comidas';
import { ServicioComidasService } from '../servicio-comidas.service';

@Component({
  selector: 'app-listado-comidas',
  templateUrl: './listado-comidas.component.html',
  styleUrls: ['./listado-comidas.component.css']
})
export class ListadoComidasComponent {
crear() {
this.http.crearComida(this.comidaSeleccionada).subscribe(()=>{
  this.http.leerComida().subscribe(x=>this.listadoComidas=x);
})
}
modificar() {
this.http.modificarComida(this.comidaSeleccionada).subscribe(()=>{
  this.http.leerComida().subscribe(x=>this.listadoComidas=x);
})
}
comidaSeleccionada:Comidas={
  nombre: '',
  procedencia: '',
  temperatura: '',
  tipo: '',
  popularidad: 0
}

  constructor(private http:ServicioComidasService){
    this.http.leerComida().subscribe(x=>this.listadoComidas=x);
  }
seleccionar(c:Comidas) {
this.comidaSeleccionada=c;
}
eliminar(c:Comidas) {
  this.http.eliminar(c).subscribe(()=>{
    this.http.leerComida().subscribe(x=>this.listadoComidas=x);
  })

}
listadoComidas!:Comidas[];

}
