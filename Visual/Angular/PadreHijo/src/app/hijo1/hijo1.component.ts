import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component {
numeroRandom() {
  this.entradadelNumeroRandom.emit({numero:Math.random()} );


}
enviarMensaje() {
  this.mensajeDeSalidaPadreHijo1.emit({mensaje:this.mensajeDeHijo1ParaPadre});
}

  //Recibe mensaje de padre a hijo1
  @Input()
mensajeDeEntradaHijo1: String="";


//Hijo 1 manda mensaje al padre
@Output()
mensajeDeSalidaPadreHijo1=new EventEmitter();
mensajeDeHijo1ParaPadre: string="";
entradadelNumeroRandom=new EventEmitter();


}
