import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coches } from './coches';

@Injectable({
  providedIn: 'root'
})
export class ServicioCochesService {

  constructor(private httpClient:HttpClient) { }

  leerCoches():Observable<Coches[]>{
    return this.httpClient.get<Coches[]>
    ('http://localhost/serviciosCoches/listadoCoches.php')

  }

  crearCoche(coche:Coches){
    return this.httpClient.post<Coches>
    ('http://localhost/serviciosCoches/insertarCoche.php',coche);

  }

  modificarCoche(coche:Coches){
    return this.httpClient.post<Coches>
    ('http://localhost/serviciosCoches/editarCoche.php',coche);

  }
  eliminarCoche(coche:Coches){
    return this.httpClient.post<Coches>
    ('http://localhost/serviciosCoches/eliminarCoche.php',coche);

  }
}
