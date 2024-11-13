import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  colorRandom:string="";
  colores:string[]=['red','green','blue','orange','yellow','pink','dark']
  numero:number=0;
colorAleatorio() {
this.numero=Math.floor(Math.random()*this.colores.length);
this.colorRandom=this.colores[this.numero];

}

}

