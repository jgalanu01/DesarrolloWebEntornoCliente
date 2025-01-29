import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioclienteService } from '../serviciocliente.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  usuario: Usuario = new Usuario();
  constructor(private servicio: ServicioclienteService,private route:Router) {}
  Registrar() {
    //llamar al servicio de añadirNuevousuario (usuario)
    this.servicio.insertarUsuario(this.usuario).subscribe((x: Usuario) => {
      this.usuario = x;
    })
    this.route.navigate(['login']);
  }
}
