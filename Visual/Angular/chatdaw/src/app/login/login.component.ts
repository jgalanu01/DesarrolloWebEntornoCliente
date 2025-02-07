import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosClienteService } from '../servicios-cliente.service';
import { Usuario } from '../usuario';
import { ServlocalclienteService } from '../servlocalcliente.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
usuario: Usuario={
  nombre: '',
  email: '',
  pwd: '',
  activo: 0
};
privado!: boolean;
constructor(private servicioclienteL:ServlocalclienteService,private servicio:ServiciosClienteService,private router:Router)
{}
logear() {
  //¿hay un usuario donde coincida el mail y el pwd con el usuario
  //que se le pasa desde el formulario (ngModelo=this.usuario)?
 this.servicio.logearUsuario(this.usuario).subscribe(
  (us)=>{
    if (us!=null)
    {
      //si cumple el primer requisito se abre una sesión
      sessionStorage.setItem('Nombre',us[0].email);
      //usuario reservado de administrador: bloquear/desbloquear mensajes y usuarios
      //servicios de tipo update en el campo activo
      if (this.usuario.email=="admin@gmail.com"){
        this.router.navigate(['admin'])
      }else
      //está marcado el cuadro checkbox (privado=true)
      if (this.privado){
        this.router.navigate(['chatp'],{queryParams:{'nombre':us[0].email}});

      }else
      {
      this.router.navigate(['chat'],{queryParams:{'nombre':us[0].email}});
      }

      }

});
}
logear2(){
  this.servicioclienteL.logearUsuario(this.usuario).subscribe(
    (us)=>{

      if (us!=null)
      {
        //si cumple el primer requisito se abre una sesión
        sessionStorage.setItem('Nombre',this.usuario.email);
        //usuario reservado de administrador: bloquear/desbloquear mensajes y usuarios
        //servicios de tipo update en el campo activo
        if (this.usuario.email=="admin@gmail.com"){
          this.router.navigate(['admin'])
        }else
        //está marcado el cuadro checkbox (privado=true)
        if (this.privado){
          this.router.navigate(['chatp'],{queryParams:{'nombre':us.email}});

        }else
        {
        this.router.navigate(['chat'],{queryParams:{'nombre':us.email}});
        }

        }

  });
}
}
