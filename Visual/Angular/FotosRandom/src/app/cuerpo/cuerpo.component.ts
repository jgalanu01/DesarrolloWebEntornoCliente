import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css'],
})
export class CuerpoComponent {
  imgChica: string = '';
  imgChico: string = '';
  w1: number = 0;
  h1: number = 0;
  h2: number = 0;
  w2: number = 0;
  numAl: number = 0;


  imgChicaT: string = '';
  wT1: number = 0;
  hT1: number = 0;
  imgChicoT: string = '';
  wT2: number = 0;
  hT2: number = 0;
  activadoA: boolean = false;
  activadoO: boolean = false;
  //temporizador:NodeJS.Timer | undefined
  temporizador1: any;
  temporizador2: any;


  activarChica() {
    this.numAl = Math.ceil(Math.random() * 100);
    this.imgChica =
      'https://randomuser.me/api/portraits/women/' + this.numAl + '.jpg';
    this.w1 = Math.ceil(Math.random() * 300);
    this.h1 = Math.ceil(Math.random() * 300);
  }
  activarChico() {
    this.numAl = Math.ceil(Math.random() * 100);
    this.imgChico =
      'https://randomuser.me/api/portraits/men/' + this.numAl + '.jpg';
    this.w2 = Math.ceil(Math.random() * 300);
    this.h2 = Math.ceil(Math.random() * 300);
  }

  activarChicaTemporizador() {
    //Desactivo botón chico (disabled=true)
    this.activadoA = true;
    //detener el temporizador de chicas
    clearInterval(this.temporizador2);
    //activo el botón de chica(disabled=False)
    this.activadoO = false;

    //poner en marcha el temporizador de chicos

    this.temporizador1 = setInterval(() => {
      this.numAl = Math.ceil(Math.random() * 100);
      this.imgChicaT =
        'https://randomuser.me/api/portraits/women/' + this.numAl + '.jpg';
      this.wT1 = Math.ceil(Math.random() * 300);
      this.hT1 = Math.ceil(Math.random() * 300);
    }, 1000);
  }

  activarChicoTemporizador() {
    this.activadoO = true;
    clearInterval(this.temporizador1);
    this.activadoA = false;

    this.temporizador2 = setInterval(() => {
      this.numAl = Math.ceil(Math.random() * 100);
      this.imgChicoT =
        'https://randomuser.me/api/portraits/men/' + this.numAl + '.jpg';
      this.wT2 = Math.ceil(Math.random() * 300);
      this.hT2 = Math.ceil(Math.random() * 300);
    }, 1000);
  }


}
