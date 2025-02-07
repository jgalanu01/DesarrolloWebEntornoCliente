import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosClienteService } from '../servicios-cliente.service';
import { Usuario } from '../usuario';
import { ServlocalclienteService } from '../servlocalcliente.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario:Usuario=new Usuario();


  constructor(private router:Router,private servicioLocal: ServlocalclienteService,private servicioClientes: ServiciosClienteService){}
Registrar() {
  this.servicioLocal.nuevoUsuario(this.usuario).subscribe((us:Usuario)=>{

      this.usuario=us;
  })
  this.router.navigate(['login']);
}



}


