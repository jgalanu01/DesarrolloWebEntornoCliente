import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaseAltura } from './clase-altura';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) {}
  
    leerAlturas():Observable<ClaseAltura[]>{
      return this.http.get<ClaseAltura[]>('http://localhost/serviciosAngular/listadoAlturas.php');


  }
}
