import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  numero2:number=0;
  numero1:number=0;
  resultado:number=0;
dividir() {
  this.resultado = this.numero1 / this.numero2;

}
multiplicar() {
  this.resultado = this.numero1 * this.numero2;

}
sumar() {
  this.resultado = this.numero1 + this.numero2;
  


}
restar() {
  this.resultado = this.numero1 - this.numero2;

}


}
