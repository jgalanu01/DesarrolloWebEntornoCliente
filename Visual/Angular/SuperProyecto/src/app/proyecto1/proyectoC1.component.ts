import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectoC1',
  templateUrl: './proyectoC1.component.html',
  styleUrls: ['./proyectoC1.component.css']
})
export class proyectoC1 {
  title = 'angular1';
  usuario:string="camacho"
  tiempo:number=0;
  nota:number=0;
  rojo:string="red";
  azul:string="blue"
  tamanio1:string="50px"
  constructor(){
    setInterval(() =>{
                    this.tiempo=(Math.round(Math.random()*1000));
                    this.nota=(Math.round(Math.random()*10))


    },1000);



  }
}
