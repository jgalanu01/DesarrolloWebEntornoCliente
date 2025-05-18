import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Clasecocinero } from '../clasecocinero';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { ServiciococineroService } from '../serviciococinero.service';

@Component({
  selector: 'app-listado-cocinero',
  templateUrl: './listado-cocinero.component.html',
  styleUrls: ['./listado-cocinero.component.css']
})
export class ListadoCocineroComponent {

  constructor(private servicioCocinero:ServiciococineroService){
    this.servicioCocinero.leerCocineros().subscribe((x)=>{
      this.dataSource.data=x;
    })
  }
eliminar(id:number) {

}
modificar(cocinero:Clasecocinero) {

}
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
    displayedColumns: string[] = ['id', 'nombre', 'imagen', 'descripcion','funcion','Eliminar','Modificar'];
    dataSource= new MatTableDataSource<Clasecocinero>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

}
