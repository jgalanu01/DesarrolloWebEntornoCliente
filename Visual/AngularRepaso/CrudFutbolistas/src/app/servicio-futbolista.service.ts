import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Futbolista } from './futbolista';

@Injectable({
  providedIn: 'root'
})
export class ServicioFutbolistaService {

  constructor(private httpClient:HttpClient) { }
  listadoFutbolistas():Observable<Futbolista[]>{
  return this.httpClient.get<Futbolista[]>
  ('http://localhost/serviciosFutbolistas/listadoFutbolistas.php')
  }

  eliminarFutbolista(f:Futbolista){
    return this.httpClient.post<Futbolista>
    ('http://localhost/serviciosFutbolistas/eliminarFutbolistas.php',f)
  }

  crearFutbolista(f:Futbolista){
    return this.httpClient.post<Futbolista>
    ('http://localhost/serviciosFutbolistas/insertarFutbolistas.php',f)
  }

  editarFutbolista(f:Futbolista){
    return this.httpClient.post<Futbolista>
    ('http://localhost/serviciosFutbolistas/modificarFutbolistas.php',f)
  }


}
