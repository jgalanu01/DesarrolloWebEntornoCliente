import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clasecocinero } from './clasecocinero';

@Injectable({
  providedIn: 'root'
})
export class ServiciococineroService {

  constructor(private httpCocinero:HttpClient) {}

    leerCocineros():Observable<Clasecocinero[]>{
      return this.httpCocinero.get<Clasecocinero[]>
      ('http://localhost/serviciosAngular/listadoCocineros.php')

   }
}
