import { Component, OnInit } from '@angular/core';
import { Clasecoche } from '../clasecoche';
import { ServicioCochesService } from '../servicio-coches.service';

@Component({
  selector: 'app-listado-coches',
  templateUrl: './listado-coches.component.html',
  styleUrls: ['./listado-coches.component.css']
})
export class ListadoCochesComponent {
modificarCoche() {
  this.http.modificarCoche(this.cocheSeleccionado).subscribe(()=>{
    this.http.leerCoches().subscribe(x=>this.listadoCoches=x);
  })
}
crearCoche() {
  this.http.crearCoche(this.cocheSeleccionado).subscribe(()=>{
    this.http.leerCoches().subscribe(x=>this.listadoCoches=x);
  })

}

listadoCoches!:Clasecoche[];
cocheSeleccionado:Clasecoche={
  matricula:'',
  color: '',
  marca: '',
  modelo: '',
  consumo: 0,
  precio: 0,
  kms: 0,
  tipoMotor: ''
}
eliminar(c: Clasecoche) {
 this.http.eliminarCoche(c).subscribe(()=>{
   this.http.leerCoches().subscribe(x=>this.listadoCoches=x);
   alert ("Coche/s eliminado/s");
 })
}
seleccionar(c: Clasecoche) {
this.cocheSeleccionado=c;
}
constructor(private http:ServicioCochesService){
 this.http.leerCoches().subscribe(x=>this.listadoCoches=x);
}


}
