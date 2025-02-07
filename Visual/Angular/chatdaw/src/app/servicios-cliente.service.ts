import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';
@Injectable({
  providedIn: 'root'
})
export class ServiciosClienteService {
  escribirMensajeP(msjChatP: Mensaje) {
    return this.httpCliente.post<Mensaje>
    ('http://moralo.atwebpages.com/menuAjax/chat/AltaMensajeP.php',msjChatP)
  }
  leerMensajePrivados(usuarioR: string):Observable<Mensaje[]>{
    return this.httpCliente.get<Mensaje[]>
    ('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesP.php?usuario='+sessionStorage.getItem('Nombre'))

  }

  constructor(private httpCliente:HttpClient) { }
  nuevoMensaje(mensaje:Mensaje){
    return this.httpCliente.post<Mensaje>('http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php',mensaje);

  }
  leerMensajes(){
    return this.httpCliente.get<Mensaje[]>(' http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes2.php');

  }
  nuevoUsuario(nuevoUsuario:Usuario):Observable<Usuario>{
    return this.httpCliente.post<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php',nuevoUsuario);


  }
  logearUsuario(us:Usuario):Observable<Usuario[]>{
    return this.httpCliente.get<Usuario[]>
    ('http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email='+us.email+'&pwd='+us.pwd)


}

}
