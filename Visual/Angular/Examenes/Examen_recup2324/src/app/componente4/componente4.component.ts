import { Component } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component {
  name = '';
  names: string[] = [];

  addName() {
    if (this.name.trim()) {
      this.names.push(this.name.trim());
      this.name = '';
    }
  }
}
