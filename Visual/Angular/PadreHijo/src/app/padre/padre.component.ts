import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent {
numeroAleatorio: any;
  actualizarRandom($event: any) {
    this.numeroAleatorio = $event.numero;

  }

  mensajeDeHijo2: string = '';

  actualizarMensajeDeHijo2($event: any) {
    this.mensajeDeHijo2 = $event.mensaje;
  }

  mensajeDeHijo1: string = '';
  actualizarMensajeDeHijo1($event: any) {
    this.mensajeDeHijo1 = $event.mensaje;
  }
  mensajeParaHijo1: string = '';

  mensajeParaHijo2: string = '';
}
