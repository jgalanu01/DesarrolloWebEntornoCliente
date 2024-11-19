import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css'],
})
export class CuerpoComponent {

  tamanio: string='';
  textoColor: string='';
  claseColor: string='';
  claseFuente: string='';
  fondo: string='';
  claseFondo:string='';

  cambioColor() {
    if (this.textoColor == 'rojo') {
      this.claseColor = 'claseRojo';
    } else if (this.textoColor == 'azul') {
      this.claseColor = 'claseAzul';
    } else if (this.textoColor == 'verde') {
      this.claseColor = 'claseVerde';
    } else if (this.textoColor == 'amarillo') {
      this.claseColor = 'claseAmarillo';
    } else {
      this.claseColor = '';
    }
  }

   cambioTamanioFuente() {
    if (this.tamanio == '12') {
      this.claseFuente = 'clase12';
    } else if (this.tamanio == '16') {
      this.claseFuente = 'clase16';
    } else if (this.tamanio == '20') {
      this.claseFuente = 'clase20';
    } else if (this.tamanio == '24') {
      this.claseFuente = 'clase24';
    } else {
      this.claseFuente = '';
    }
   }

   cambioFondo() {
    if  (this.fondo == 'gris') {
      this.claseFondo = 'bg-gray';
    } else if (this.fondo == 'azul') {
      this.claseFondo = 'bg-blue';
    } else if (this.fondo == 'rojo') {
      this.claseFondo = 'bg-red';
    } else if (this.fondo == 'amarillo') {
      this.claseFondo = 'bg-yellow';
    } else if (this.fondo == 'verde') {
      this.claseFondo = 'bg-green';
    } else {
      this.claseFondo = '';

    }


}
}


