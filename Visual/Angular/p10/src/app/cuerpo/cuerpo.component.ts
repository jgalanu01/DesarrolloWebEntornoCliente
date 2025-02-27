import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
colores:string[]=['red','blue','green','yellow','gray','purple','black','orange','brown','pink'];
tamanios:string[]=['10px','15px','20px','25px','30px','35px','40px','45px','50px','55px'];
activarB: boolean = false;
color: string="";
tamanioF: string="";
segundos: number = 10;
temporizador: any;
textoBoton:string="Botón Habilitado";

cuentaAtras() {
  this.activarB = true;
  this.textoBoton = "Botón Deshabilitado";
  this.temporizador = setInterval(() => {
    this.segundos--;
    this.color=this.colores[this.segundos];
    this.tamanioF=this.tamanios[this.segundos];

    if (this.segundos==0){
      clearInterval(this.temporizador);
      this.textoBoton = "Botón Habilitado";
      this.segundos = 10;
      this.activarB = false;

    }


}, 1000);


}

}
