import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiciosAdminService } from 'src/app/servicios-admin.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-adminusuarios',
  templateUrl: './adminusuarios.component.html',
  styleUrls: ['./adminusuarios.component.css']
})
export class AdminusuariosComponent implements OnInit{
  dataSource =new MatTableDataSource<Usuario>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private servicioAdmin: ServiciosAdminService){}
  usuarioR:string | null | undefined;
  ngOnInit(): void {
    this.usuarioR=sessionStorage.getItem('Nombre');
    if (this.usuarioR!='admin@gmail.com'){
      this.dataSource=new MatTableDataSource<Usuario>();
    }
    else
    {
      this.servicioAdmin.listarUsuarios().subscribe((x:Usuario[])=>{
        this.dataSource.data=x;
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
       })
    }

  }
activarUsuario(us: Usuario) {
 this.servicioAdmin.activarUsuarios(us).subscribe((x)=>
 this.servicioAdmin.listarUsuarios().subscribe((x:Usuario[])=>{
  this.dataSource.data=x;
  this.dataSource.paginator=this.paginator;
  this.dataSource.sort=this.sort;
 })
 )
}
displayedColumns: string[]=['nombre','email','pwd','activo','bloquear','activar'];
bloquearUsuario(us: Usuario) {
  this.servicioAdmin.bloquearUsuarios(us).subscribe((x)=>
  this.servicioAdmin.listarUsuarios().subscribe((x:Usuario[])=>{
    this.dataSource.data=x;
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
   })
  )
}

applyFilter(event: KeyboardEvent) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
}

}
}
