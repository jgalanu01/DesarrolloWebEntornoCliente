import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ServicioService } from '../servicio.service';
import { Productos } from '../productos';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
})
export class ListadoProductosComponent implements OnInit {
  datasource = new MatTableDataSource<Productos>();
  columnas: string[] = ['id', 'name', 'price', 'photo', 'activo','stockActual','stockMinimo']

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private servicio: ServicioService, public dialog: MatDialog) {}

  ngOnInit(): void {
    // Cargar los datos del JSON
    this.servicio.cargarProductos().subscribe((data) => {
      this.datasource.data = data;
      this.servicio.setProductos(data);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    });
  }

  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.datasource.filter = filtro.trim().toLowerCase();
  }


}
