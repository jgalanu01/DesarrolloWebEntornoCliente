import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Mensaje } from '../mensaje';
import { ServiciosAdminService } from '../servicios-admin.service';
import { ServiciosClienteService } from '../servicios-cliente.service';
import { Usuario } from '../usuario';
import { ServlocalclienteService } from '../servlocalcliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-p',
  templateUrl: './chat-p.component.html',
  styleUrls: ['./chat-p.component.css']
})
export class ChatPComponent implements OnInit {
  seleccionado!: string;
  listadoUsuarios: Usuario[]=[];
  listadoMensajesE: Mensaje[]=[];
  usuarioR!: string;
msjChatP: Mensaje={
  id:0,
  usuario:'',
  fecha:'',
  mensaje:'',
  destinatario:'',
  activo:1,
};
constructor(private route:Router,private servicioL:ServlocalclienteService,private servicioAdmin:ServiciosAdminService ,private servicioCliente:ServiciosClienteService){}

enviarMensaje() {
 if (this.usuarioR===sessionStorage.getItem('Nombre')){
  this.msjChatP.fecha=new Date().toLocaleString() ||'';

  console.log(this.seleccionado)
  this.msjChatP.usuario=this.usuarioR;
  if (this.msjChatP.destinatario!=null){
    this.servicioL.escribirMensajeP(this.msjChatP).subscribe();
    this.msjChatP.mensaje=""
  }
//   ((resultado:Mensaje[])=>{
//     this.servicioCliente.leerMensajePrivados(this.usuarioR).subscribe(
//       (x:Mensaje[])=>{
//         this.dataSource.data=x;
//       }
//     )
//   })

  }
}

actualizar() {
}

cerrarSesion() {
  sessionStorage.removeItem('Nombre');
  this.dataSource=new MatTableDataSource<Mensaje>();
  this.route.navigate(['login']);
}
dataSource=new MatTableDataSource<Mensaje>();
applyFilter($event: KeyboardEvent) {
}
displayedColumns: string[]=['id','usuario','fecha','mensaje','destinatario'];

ngOnInit(): void {
    if (sessionStorage.getItem('Nombre')==null){
      this.dataSource=new MatTableDataSource<Mensaje>();
    }else{
      this.usuarioR=sessionStorage.getItem('Nombre')||'';
      this.servicioL.listadoMensajesE(this.usuarioR).subscribe((x:Mensaje[])=>{
        this.listadoMensajesE=x;
      //nuevo servicio de listado de mis mensajes privados que
      //pertenecen a this.usuarioR
      this.servicioL.listadoMensajesP(this.usuarioR).subscribe((x:Mensaje[])=>{
        this.dataSource.data=x;
      })
      this.servicioL.listadoUsuarios().subscribe((x:Usuario[])=>{
        this.listadoUsuarios=x
      })

      })
      }
    }
  }


