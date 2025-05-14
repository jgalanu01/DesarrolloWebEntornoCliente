import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clasecoche } from './clasecoche';

@Injectable({
  providedIn: 'root'
})
export class ServicioCochesService {

  constructor(private httCliente:HttpClient) { }
leerCoches():Observable<Clasecoche[]>
  {
    return this.httCliente.get<Clasecoche[]>
    ('http://localhost/serviciosCoches/listadoCoches.php')
  }
crearCoche(coche:Clasecoche){
  return this.httCliente.post<Clasecoche>
  ('http://localhost/serviciosCoches/insertarCoche.php',coche);
}
 eliminarCoche(coche:Clasecoche){
  return this.httCliente.post<Clasecoche>
  ('http://localhost/serviciosCoches/eliminarCoche.php',coche);
 }

 modificarCoche(coche:Clasecoche){
  return this.httCliente.post<Clasecoche>
  ('http://localhost/serviciosCoches/editarCoche.php',coche);
 }
}
