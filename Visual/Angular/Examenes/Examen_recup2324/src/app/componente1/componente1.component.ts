import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  buttons = ['Rojo', 'Verde', 'Amarillo', 'Azul']; // Etiquetas de los botones
  colors = ['btn-danger', 'btn-success', 'btn-warning', 'btn-info']; // Colores de Bootstrap
  currentColor = 'btn-primary'; // Color inicial

  changeColor(newColor: string) {
    this.currentColor = newColor; // Cambia la clase de color de todos los botones
  }
}
