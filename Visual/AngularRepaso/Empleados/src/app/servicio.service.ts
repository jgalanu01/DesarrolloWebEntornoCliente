import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaseEmpleados } from './clase-empleados';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }
leerEmpleados():Observable<ClaseEmpleados[]>{
  return this.http.get<ClaseEmpleados[]>('http://localhost/serviciosAngular/listadoEmpleados.php')
}
}
