import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comidas } from './comidas';

@Injectable({
  providedIn: 'root'
})
export class ServiciocomidaService {

  constructor(private httpClient:HttpClient) { }

  leerComida():Observable<Comidas[]>{
    return this.httpClient.get<Comidas[]>
    ('http://localhost/serviciosComidas/listadoComidas.php');
  }
}
