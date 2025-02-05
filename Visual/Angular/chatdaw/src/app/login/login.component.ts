import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioclienteService } from '../serviciocliente.service';
import { Usuario } from '../usuario';
import { ServiciolocalService } from '../serviciolocal.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router, private servicioLocal:ServiciolocalService, private servicioCliente:ServicioclienteService) {

  }

  listadoUsuarios:Usuario[]=[];
  usuarioEncontrado!: Usuario;
Login2() {

  this.servicioLocal.leerTodosUsuarios().subscribe(x=>{
    this.listaUsuarios=x;
    this.listadoUsuarios.forEach(user=>{
      if (user.email===this.usuario.email && user.pwd===this.usuario.pwd){
        this.usuarioEncontrado=user;
      }
    })
  });

  if(this.usuarioEncontrado){
    if(this.usuarioEncontrado.activo==1){
      //abrir sesion
      sessionStorage.setItem('Nombre',this.usuarioEncontrado.email);
      if(this.usuario.email=="admin@gmail.com"){
        this.router.navigate(['admin'])
      }else{

      }
      if(!this.privado){
        this.router.navigate(['chat'])
      }
    }
  }

}
privado!:boolean;

  usuario: Usuario=new Usuario();
  listaUsuarios:Usuario[]=[];
  Login(){
    this.servicioCliente.logeo(this.usuario).subscribe((x)=>{
      this.usuario=x[0];
      sessionStorage.setItem('Nombre',x[0].email);
      if (this.usuario.email=="admin@gmail.com"){
        this.router.navigate(['admin']);
      }else{
        if (this.privado){
          this.router.navigate(['chatp'])
        }else{
          this.router.navigate(['chat']);
        }
      }

    })


  }

}









