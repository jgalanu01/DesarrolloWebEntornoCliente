import { Component } from '@angular/core';
import { Clasecoche } from '../clasecoche';
import { ServicioCochesService } from '../servicio-coches.service';

@Component({
  selector: 'app-listado-coches',
  templateUrl: './listado-coches.component.html',
  styleUrls: ['./listado-coches.component.css']
})
export class ListadoCochesComponent {
modificarCoche() {
  this.http.modificarCoche(this.cocheSeleccionado).subscribe((x:Clasecoche)=>{
    this.http.leerCoches().subscribe(x=>this.listadoCoches=x);
  })

}
crearCoche() {
  return this.http.crearCoche(this.cocheSeleccionado).subscribe((x:Clasecoche)=>{
    this.http.leerCoches().subscribe(x=>this.listadoCoches=x);
  })

}

eliminar(c: Clasecoche) {
  this.http.eliminarCoche(c).subscribe((x:Clasecoche)=>{
    this.http.leerCoches().subscribe(x=>this.listadoCoches=x); //Recarga
    alert("Coche/s eliminado/s")

  })

}
seleccionar(c: Clasecoche) {
  this.cocheSeleccionado=c;

}

listadoCoches!:Clasecoche[];
coche!:Clasecoche;
cocheSeleccionado:Clasecoche={
  color: '',
  marca: '',
  modelo: '',
  consumo: 0,
  precio: 0,
  kms: 0,
  tipoMotor: ''
}


constructor(private http:ServicioCochesService){
  this.http.leerCoches().subscribe(x=>this.listadoCoches=x);

}

}
