import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { ServicioUsuariosService } from '../servicio-usuarios.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario:Usuario=new Usuario(0,'','','',0);
  confirmar!:string;
  constructor(private http:ServicioUsuariosService) {}
  registrar() {
    if(this.confirmar===this.usuario.pwd)
    this.http.registrarUsuario(this.usuario).subscribe(us=>{
      this.usuario=us;

  })
}
}
