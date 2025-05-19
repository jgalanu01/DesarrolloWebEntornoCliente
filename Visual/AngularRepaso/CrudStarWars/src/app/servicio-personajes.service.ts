import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personajes } from './personajes';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonajesService {

  constructor(private httpClient:HttpClient) { }

  leerPersonajes():Observable<Personajes[]>{
    return this.httpClient.get<Personajes[]>
    ('http://localhost/serviciosStarwars/listadoPersonajes.php')

  }

  eliminarPersonajes(personaje:Personajes){
    return this.httpClient.post<Personajes>
    ('http://localhost/serviciosStarwars/eliminarPersonajes.php',personaje)
  }

  crearPersonaje(personaje:Personajes){
    return this.httpClient.post<Personajes>
    ('http://localhost/serviciosStarwars/insertarPersonajes.php',personaje)
  }

  modificarPersonaje(personaje:Personajes){
    return this.httpClient.post<Personajes>
    ('http://localhost/serviciosStarwars/editarPersonaje.php',personaje)
  }
}
