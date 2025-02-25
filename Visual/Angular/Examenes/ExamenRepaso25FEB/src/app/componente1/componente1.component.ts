import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  colores: string []=['red','green','blue','yellow','orange','purple'];
  colorActual:string|null=null;

  cambiarColor(color:string){
    this.colorActual=color;
  }

}
