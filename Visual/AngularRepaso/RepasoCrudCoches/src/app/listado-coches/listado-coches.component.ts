import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Coches } from '../coches';
import { ServicioCochesService } from '../servicio-coches.service';

@Component({
  selector: 'app-listado-coches',
  templateUrl: './listado-coches.component.html',
  styleUrls: ['./listado-coches.component.css']
})
export class ListadoCochesComponent {
modificarCoche() {
this.httpClient.modificarCoche(this.cocheSeleccionado).subscribe(()=>{
  this.httpClient.leerCoches().subscribe(x=>this.listadoCoches=x);

})
}
crearCoche() {
  this.httpClient.crearCoche(this.cocheSeleccionado).subscribe(()=>{
    this.httpClient.leerCoches().subscribe(x=>this.listadoCoches=x);
  })

}

listadoCoches!:Coches[];
cocheSeleccionado:Coches={
  matricula:'',
  color:'',
  marca:'',
  modelo:'',
  consumo:0,
  precio:0,
  kms:0,
  tipoMotor:''
}

constructor(private httpClient:ServicioCochesService){
  this.httpClient.leerCoches().subscribe(x=>this.listadoCoches=x);

}

eliminar(c:Coches) {
  this.httpClient.eliminarCoche(c).subscribe(()=>{
    this.httpClient.leerCoches().subscribe(x=>this.listadoCoches=x);
    alert('Coche eliminado');
  })




}
seleccionar(c:Coches) {
  this.cocheSeleccionado=c;


}


}
