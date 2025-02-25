import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css'],
})
export class Componente2Component {
  contador: number = 0;
  intervalo: any=null;

  iniciarContador() {
    if (!this.intervalo) {
      this.intervalo = setInterval(() => {
        this.contador++;
      }, 1000);
    }
  }

  pausarContador() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
      this.intervalo = null;
    }
  }
  reanudarContador() {
    this.iniciarContador();
  }
}
