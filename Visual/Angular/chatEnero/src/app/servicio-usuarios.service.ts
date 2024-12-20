import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';


@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {

  constructor(private http:HttpClient) {}

  registrarUsuario(us:Usuario):Observable<Usuario> {
    return this.http.post<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php',us);

}
}
