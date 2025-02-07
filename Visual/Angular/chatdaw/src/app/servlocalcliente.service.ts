import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServlocalclienteService {

  constructor(private httpCliente:HttpClient) { }

  cambiarPwd(nuevoPwd:Usuario) {
    return this.httpCliente.post<Usuario>
    ('http://localhost/serviciosCliente/editarPwd.php',nuevoPwd)
  }
  listadoMensajesE(usuarioR: string) {
    return this.httpCliente.get<Mensaje[]>
    ('http://localhost/serviciosCliente/listadoMensajesE.php?usuario='+usuarioR)
  }


  escribirMensajeP(msjChatP: Mensaje) {
      return this.httpCliente.post<Mensaje>
      ('http://localhost/serviciosCliente/insertarmensajep.php',msjChatP)
    }

    listadoMensajesP(usuarioR: string):Observable<Mensaje[]> {
      return this.httpCliente.get<Mensaje[]>
      ('http://localhost/serviciosCliente/listadoMensajesP.php?usuario='+usuarioR)

    }
    nuevoMensaje(mensaje:Mensaje){
      return this.httpCliente.post<Mensaje>
      ('http://localhost/serviciosCliente/insertarmensaje.php',mensaje);

    }
    leerMensajes(){
      return this.httpCliente.get<Mensaje[]>
      ('http://localhost/serviciosCliente/listadoMensajes.php')
    }
    nuevoUsuario(nuevoUsuario:Usuario):Observable<Usuario>{
      return this.httpCliente.post<Usuario>
      ('http://localhost/serviciosCliente/insertarUsuario.php',nuevoUsuario);


    }
    logearUsuario(us:Usuario):Observable<Usuario>{
      return this.httpCliente.post<Usuario>
      ('http://localhost/serviciosCliente/login.php',us)


  }
  listadoUsuarios():Observable<Usuario[]>{
    return this.httpCliente.get<Usuario[]>
    ('http://localhost/serviciosCliente/listadoUsuarios.php')
  }
}
