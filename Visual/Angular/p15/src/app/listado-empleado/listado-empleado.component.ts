import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Empleado } from '../empleado';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-listado-empleado',
  templateUrl: './listado-empleado.component.html',
  styleUrls: ['./listado-empleado.component.css']
})
export class ListadoEmpleadoComponent implements OnInit {
modificarEmpleado(_t98: any) {

}
eliminarEmpleado(arg0: any) {

}
  applyFilter($event: KeyboardEvent) {

  }
  columnas: string[]= ['id', 'nombre', 'direccion', 'cargo','edad','imagen','borrar','modificar'];
  datos:Empleado[]=[];
  dataSource!: MatTableDataSource<Empleado>;
  empleado!: Empleado;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor (private httpCliente:ServicioEmpleadoService){

  }
  ngOnInit(): void {
    this.httpCliente.leerEmpleados().subscribe((x)=>{this.dataSource.data=x});
  }

}


