import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServlocaladminService {

   constructor(private httpCliente : HttpClient ) {}

    leerTodosMensajes(){
      return this.httpCliente.get<Mensaje[]>
      ('http://localhost/serviciosAdmin/listadoTodosMensajes.php')
    }
    activarMensaje(msj:Mensaje){
      return this.httpCliente.post<Mensaje>
      ('http://localhost/serviciosAdmin/activarMensaje.php',msj)
    }
    bloquearMensaje(msj:Mensaje){
      return this.httpCliente.post<Mensaje>
      ('http://localhost/serviciosAdmin/bloquearMensaje.php',msj)

    }
    listarUsuarios(){
      return this.httpCliente.get<Usuario[]>
      ('http://localhost/serviciosAdmin/listadoTodosUsuarios.php')
    }
    activarUsuarios(us:Usuario){
      return this.httpCliente.post<Usuario>
      ('http://localhost/serviciosAdmin/activarUsuarios.php',us)
    }
    bloquearUsuarios(us:Usuario){
      return this.httpCliente.post<Usuario>
      ('http://localhost/serviciosAdmin/bloquearUsuario.php',us)
    }
}
