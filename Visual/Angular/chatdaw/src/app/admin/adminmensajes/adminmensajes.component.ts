import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mensaje } from 'src/app/mensaje';
import { ServiciosAdminService } from 'src/app/servicios-admin.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-adminmensajes',
  templateUrl: './adminmensajes.component.html',
  styleUrls: ['./adminmensajes.component.css']
})
export class AdminmensajesComponent implements OnInit {
cerrarSesion() {
}
  dataSource=new MatTableDataSource<Mensaje>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  usuarioR!: string|null;
  constructor(private servicioAdmin: ServiciosAdminService){}
 // mensajes!: Mensaje[];
ngOnInit(): void {
  //comprobar si hay sesión
  this.usuarioR=sessionStorage.getItem('Nombre');
  if (this.usuarioR!='admin@gmail.com'){
    this.dataSource=new MatTableDataSource<Mensaje>();
  }else
  {
  this.servicioAdmin.leerTodosMensajes().subscribe((x:Mensaje[])=>{
    this.dataSource.data=x;
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  })
}
}
displayedColumns: string[]=['id','fecha','usuario','mensaje','activo','bloquear','activar'];
activarMensaje(msj: Mensaje) {
  this.servicioAdmin.activarMensaje(msj).subscribe((x)=>
  this.servicioAdmin.leerTodosMensajes().subscribe((x:Mensaje[])=>{
   this.dataSource.data=x;
   this.dataSource.paginator=this.paginator;
   this.dataSource.sort=this.sort;
}))}
bloquearMensaje(msj: Mensaje) {
  this.servicioAdmin.bloquerMensaje(msj).subscribe((x)=>
  this.servicioAdmin.leerTodosMensajes().subscribe((x:Mensaje[])=>{
   this.dataSource.data=x;
   this.dataSource.paginator=this.paginator;
   this.dataSource.sort=this.sort;
}))}


applyFilter(event: KeyboardEvent) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();

}
}

}
