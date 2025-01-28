import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioclienteService } from '../serviciocliente.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router,private  servicioCliente:ServicioclienteService){

  }
  usuario: Usuario=new Usuario();
  listaUsuarios:Usuario[]=[];
  Login(){
    this.servicioCliente.logeo(this.usuario).subscribe((x)=>{
      this.usuario=x[0];
      sessionStorage.setItem('Nombre',x[0].nombre);
    this.router.navigate(['chat']);
    })


  }

}









