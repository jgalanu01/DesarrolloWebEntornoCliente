import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ClaseCoche } from '../clase-coche';
import { ServicioCocheService } from '../servicio-coche.service';

@Component({
  selector: 'app-listadocoches',
  templateUrl: './listadocoches.component.html',
  styleUrls: ['./listadocoches.component.css']
})
export class ListadocochesComponent {

cocheSeleccionado:ClaseCoche={
  matricula:'',
  color:'',
  marca:'',
  modelo:'',
  consumo:0,
  precio:0,
  kms:0,
  tipoMotor:''
}

listaDeCoches!:ClaseCoche[];

constructor(private http:ServicioCocheService){
this.http.leerCoches().subscribe(x=>this.listaDeCoches=x);
}

modificarCoche() {
  this.http.modificarCoche(this.cocheSeleccionado).subscribe((x:ClaseCoche)=>{
    this.http.leerCoches().subscribe(x=>this.listaDeCoches=x);
  })


}
crearCoche() {
  return this.http.crearCoche(this.cocheSeleccionado).subscribe((x:ClaseCoche)=>{
    this.http.leerCoches().subscribe(x=>this.listaDeCoches=x);
  })


}

eliminar(c: ClaseCoche) {
  this.http.eliminarCoche(c).subscribe((x:ClaseCoche)=>{
    this.http.leerCoches().subscribe(x=>this.listaDeCoches=x);
    alert ("Coche/s eliminado/s");
  })

}
seleccionar(c:ClaseCoche) {
  this.cocheSeleccionado=c;

}


}
