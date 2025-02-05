import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';
import { formatDate } from '@angular/common';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiciolocalService {

  constructor(private http: HttpClient, @Inject(LOCALE_ID) private locale: string) {}

  leerTodosUsuarios(){
    return this.http.get<Usuario[]>
    ('http://localhost/serviciosChat/listadoUsuarios.php')

  }
  leerMensajesP(parametroUser: string): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(
      'http://localhost/serviciosChat/listadoMensajes.php')
    }

    insertarMensajeP(msjchat: Mensaje): Observable<Mensaje> {
      let fecha=new Date();
      msjchat.fecha=formatDate(fecha,"HH:mm:ss/dd-MM-yyyy",this.locale);
      return this.http.post<Mensaje>(
        'http://moralo.atwebpages.com/menuAjax/chat/AltaMensajeP.php',
        msjchat)
    }



    insertarUsuario(usuario: Usuario): Observable<Usuario> {
      return this.http.post<Usuario>(
        'http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php',
        usuario
      );
    }

    leerMensajes(){
      return this.http.get<Mensaje[]>(
        'http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes2.php'
      );
    }

    escribirMensaje(mensaje: Mensaje): Observable<Mensaje> {
      return this.http.post<Mensaje>(
        'http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php',
        mensaje
      );
    }

    logeo(usuario: Usuario): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(
        'http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email=' +
          usuario.email +
          '&pwd=' +
          usuario.pwd
      );
    }
  }

