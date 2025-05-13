import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clasecoche } from './clasecoche';

@Injectable({
  providedIn: 'root'
})
export class ServicioCochesService {

  constructor(private httpCliente:HttpClient) { }

  leerCoches():Observable<Clasecoche[]>{
    return this.httpCliente.get<Clasecoche[]>
    ('http://localhost/serviciosCoches/listadoCoche.php')
  }

  crearCoche(coche:Clasecoche){
    return this.httpCliente.post<Clasecoche>
    ('http://localhost/serviciosCoches/insertarCoche.php',coche)

  }

  eliminarCoche(coche:Clasecoche){
    return this.httpCliente.delete<Clasecoche>
    ('http://localhost/serviciosCoches/eliminarCoche.php/?modelo='+coche.modelo)
  }

  modificarCoche(coche:Clasecoche){
    return this.httpCliente.put<Clasecoche>
    ('http://localhost/serviciosCoches/editarCoche.php',coche);
  }
}
