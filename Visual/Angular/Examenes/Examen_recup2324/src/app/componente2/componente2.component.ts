import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {
  counter = 0;
  interval: any;

  startCounter() {
    this.stopCounter();
    this.interval = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  pauseCounter() {
    this.stopCounter();
  }

  resumeCounter() {
    this.startCounter();
  }

  private stopCounter() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
