import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Empleado} from '../empleado';
import {ServicioEmpleadoService} from '../servicio-empleado.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listado-empleado',
  templateUrl: './listado-empleado.component.html',
  styleUrls: ['./listado-empleado.component.css']
})
export class ListadoEmpleadoComponent implements OnInit,AfterViewInit {
modificarEmpleado(_t98: any) {

}
eliminarEmpleado(arg0: any) {

}
  applyFilter(event: KeyboardEvent) {
    const filtro=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filtro.trim().toLowerCase();

  }

  columnas: string[]= ['id', 'nombre', 'direccion', 'cargo','edad','imagen','eliminar','modificar'];
  datos:Empleado[]=[];
  dataSource=new MatTableDataSource<Empleado>;
  empleado!: Empleado;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor (private httpCliente:ServicioEmpleadoService){
    this.httpCliente.leerEmpleados().subscribe((empleado)=>{this.dataSource.data=empleado});

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

  }
  ngOnInit(): void {

  }

}


