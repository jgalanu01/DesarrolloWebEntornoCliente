import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort } from '@angular/material/sort';
import {MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Mensaje } from '../mensaje';
import { ServiciosClienteService } from '../servicios-cliente.service';
import { ServlocalclienteService } from '../servlocalcliente.service';
import { Usuario } from '../usuario';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
nuevoPwd: Usuario={
  nombre: '',
  email: '',
  pwd: '',
  activo: 0
};

  //definir constructor : datos y navegación
constructor(private servicioclienteL:ServlocalclienteService ,private servicio:ServiciosClienteService,private route:Router){

}
cambiarPwd() {
  this.nuevoPwd.email=this.usuarioR || '';
  this.servicioclienteL.cambiarPwd(this.nuevoPwd).subscribe();
}
seleccionado: any;
actualizar() {
  this.servicioclienteL.leerMensajes().subscribe((x:Mensaje[])=>{
    this.dataSource.data=x;
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  })
}
  mensaje: Mensaje={
    id:0,
    fecha:'',
    usuario:'',
    mensaje:'',
    destinatario:'todos',
    activo:1
  }
textoMensaje!: string;
enviarMensaje() {
  //cargar los datos en el objeto mensaje
  //usuario : lo coge de la sesión
  this.mensaje.usuario=this.usuarioR || '';
  //la fecha la coge del sistema
  this.mensaje.fecha=new Date().toLocaleDateString();
  //el texto del mensaje a través del ngModel del formulario
  this.mensaje.mensaje=this.textoMensaje;
  this.servicioclienteL.nuevoMensaje(this.mensaje).subscribe(
    ()=>{
      this.servicioclienteL.leerMensajes().subscribe((x:Mensaje[])=>{
        this.dataSource.data=x;
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      })
    }
  )
}

  //array de objeto que conecta con el servicio leerMensajes
dataSource=new MatTableDataSource<Mensaje>();
//definir las columnas de la tabla
displayedColumns: string[]=['id','fecha','usuario','mensaje'];
//definir los viewChild vistas para paginar y para ordenar
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
//filtra por cualquier campo
applyFilter(event: KeyboardEvent) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
   }
}
usuarioR!:string |null;
  ngOnInit(): void {
     if (sessionStorage.getItem('Nombre')!=null){
    this.usuarioR=sessionStorage.getItem('Nombre');
    this.servicioclienteL.leerMensajes().subscribe((x:Mensaje[])=>{
      this.dataSource.data=x;
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
  }else
  {
    this.dataSource=new MatTableDataSource<Mensaje>();
    this.usuarioR="";
  }
  }

cerrarSesion() {
  sessionStorage.clear();;
  this.usuarioR="sesión cerrada";
  this.dataSource=new MatTableDataSource<Mensaje>();
  this.route.navigate(['login']);

}
}
