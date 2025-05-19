import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comidas } from './comidas';

@Injectable({
  providedIn: 'root'
})
export class ServicioComidasService {

  constructor(private httpClient:HttpClient) { }

  leerComida():Observable<Comidas[]>{
    return this.httpClient.get<Comidas[]>
    ('http://localhost/serviciosComidas/listadoComidas.php')
  }

  crearComida(comida:Comidas){
    return this.httpClient.post<Comidas>
    ('http://localhost/serviciosComidas/insertarComidas.php',comida)
  }

  eliminar(comida:Comidas){
    return this.httpClient.post<Comidas>
    ('http://localhost/serviciosComidas/eliminarComidas.php',comida)
  }

  modificarComida(comida:Comidas){
    return this.httpClient.post<Comidas>
    ('http://localhost/serviciosComidas/modificarComidas.php',comida)
  }



}
