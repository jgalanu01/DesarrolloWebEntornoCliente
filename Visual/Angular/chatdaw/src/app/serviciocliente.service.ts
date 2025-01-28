import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioclienteService {

  constructor(private http:HttpClient) { }

 // http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php

//http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php
insertarUsuario(usuario:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php',usuario);

}

logeo(usuario:Usuario):Observable<Usuario[]>{
  return this.http.get<Usuario[]>('http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email='+usuario.email+'&pwd='+usuario.pwd)

}


}
