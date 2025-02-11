import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {
  mensajeDeHijo2ParaPadre: string="";
  enviarMensaje() {
    this.mensajeDeSalidaPadreHijo2.emit({mensaje:this.mensajeDeHijo2ParaPadre})
  }

  //Recibe mensaje de padre a hijo 2
  @Input()
  mensajeDeEntradaHijo2:string=""

  //Hijo 2 manda mensaje al padre
  @Output()
  mensajeDeSalidaPadreHijo2=new EventEmitter();



}
