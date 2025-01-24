import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectoC2',
  templateUrl: './proyectoC2.component.html',
  styleUrls: ['./proyectoC2.component.css']
})
export class proyectoC2 {
  title = 'angular2';
  nombreCiclo:string="DAW";
  nombreCompleto:string="Desarrollo de Aplicaciones WEB"
  nombreUsuario:string="";
  country=["Gales","Francia","Italia","Inglaterra","Escocia","Irlanda"]

  cambiarNombre(){
    this.nombreCiclo=this.nombreCompleto;
  }
  retornarNombre(){
    this.nombreCiclo="DAW";
  }
  obtenerNombre(nombre:string){
   this.nombreUsuario=nombre;
  }
}
