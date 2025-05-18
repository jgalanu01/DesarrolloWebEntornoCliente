import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaseCoche } from './clase-coche';

@Injectable({
  providedIn: 'root'
})
export class ServicioCocheService {

  constructor(private httpClient:HttpClient) { }

  leerCoches():Observable<ClaseCoche[]>{
    return this.httpClient.get<ClaseCoche[]>
    ('http://localhost/serviciosCoches/listadoCoches.php')
  }

  crearCoche(coche:ClaseCoche){
    return this.httpClient.post<ClaseCoche>
    ('http://localhost/serviciosCoches/insertarCoche.php',coche)
  }
  modificarCoche(coche:ClaseCoche){
    return this.httpClient.post<ClaseCoche>
    ('http://localhost/serviciosCoches/editarCoche.php',coche)
  }

  eliminarCoche(coche:ClaseCoche){
    return this.httpClient.post<ClaseCoche>
    ('http://localhost/serviciosCoches/eliminarCoche.php',coche)

  }
}
