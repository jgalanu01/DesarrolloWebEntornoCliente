import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiciosAdminService {

  constructor(private httpCliente : HttpClient ) {}

  leerTodosMensajes(){
    return this.httpCliente.get<Mensaje[]>('http://moralo.atwebpages.com/chat/ObtenerMensajes.php')
  }
  activarMensaje(msj:Mensaje){
    return this.httpCliente.put<Mensaje>('http://moralo.atwebpages.com/chat/ActivarMensaje.php',msj)
  }
  bloquerMensaje(msj:Mensaje){
    return this.httpCliente.put<Mensaje>('http://moralo.atwebpages.com/chat/BloquearMensaje.php',msj)

  }
  listarUsuarios(){
    return this.httpCliente.get<Usuario[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerUsuarios.php ')
  }
  activarUsuarios(us:Usuario){
    return this.httpCliente.put<Usuario>('http://moralo.atwebpages.com/chat/ActivarUsuario.php',us)
  }
  bloquearUsuarios(us:Usuario){
    return this.httpCliente.put<Usuario>('http://moralo.atwebpages.com/chat/BloquearUsuario.php',us)
  }
//   http://moralo.atwebpages.com/chat/ActivarMensaje.php   (necesita id mensaje)
// http://moralo.atwebpages.com/chat/BloquearMensaje.php (necesita id mensaje)
// http://moralo.atwebpages.com/chat/ObtenerMensajes.php  (listado de todos los mensajes)
// http://moralo.atwebpages.com/chat/ActivarUsuario.php  (necesita objeto Usuario)
// http://moralo.atwebpages.com/chat/BloquearUsuario.php (necesita objeto Usuario)
// http://moralo.atwebpages.com/menuAjax/chat/ObtenerUsuarios.php  (obtener la lista de usuarios para bloquear/activar usuarios)
}
