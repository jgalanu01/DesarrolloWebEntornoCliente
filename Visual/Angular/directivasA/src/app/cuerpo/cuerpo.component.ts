import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {

nombreFruta: string="";
lista:string[]=[]

aniadirFrutas() {
  this.lista.push(this.nombreFruta);

}

}
