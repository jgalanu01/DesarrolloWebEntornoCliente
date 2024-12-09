import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class ServEmpleadoService {
  modificarEmpleado(emp: Empleado) {
    return this.http.put<Empleado>(' http://moralo.atwebpages.com/ajaxListar/update_persona.php',emp);
  
  }
  constructor(private http: HttpClient) { }

  leerEmpleado() {
    return this.http.get<Empleado[]>('http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php');
  }
  insertarEmpleado(emp: Empleado) {
    return this.http.post<Empleado>('http://moralo.atwebpages.com/ajaxListar/create_persona.php', emp);
  }

  eliminarEmpleado(emp: number) {
    return this.http.delete<Empleado>('http://moralo.atwebpages.com/ajaxListar/delete_persona.php/?id=' + emp);
  }
}
