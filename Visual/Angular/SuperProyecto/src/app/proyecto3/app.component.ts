import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular3';
  numero:number=0;
   incrementar(){
     this.numero++;
   }
   decrementar(){
     this.numero--;
   }
}
