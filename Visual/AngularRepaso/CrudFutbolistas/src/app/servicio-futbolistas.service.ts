import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Futbolistas } from './futbolistas';

@Injectable({
  providedIn: 'root'
})
export class ServicioFutbolistasService {

  constructor(private http:HttpClient) { }

  leerFutbolistas():Observable<Futbolistas[]>{
    return this.http.get<Futbolistas[]>
    ('http://localhost/serviciosFutbolistas/listadoFutbolistas.php')
  }

  eliminarFutbolista(f:Futbolistas){
    return this.http.post<Futbolistas>
    ('http://localhost/serviciosFutbolistas/eliminarFutbolistas.php',f);
  }

  crearFutbolista(f:Futbolistas){
    return this.http.post<Futbolistas>
    ('http://localhost/serviciosFutbolistas/insertarFutbolistas.php',f)
  }

  modificarFutbolista(f:Futbolistas){
    return this.http.post<Futbolistas>
    ('http://localhost/serviciosFutbolistas/modificarFutbolistas.php',f)

  }
}
