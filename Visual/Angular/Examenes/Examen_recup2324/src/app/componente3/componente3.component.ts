import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {
  imageUrl: string | null = null;

  generateImage() {
    const random = Math.floor(Math.random() * 1000);
    this.imageUrl = `https://picsum.photos/200/300?random=${random}`;
  }
}
