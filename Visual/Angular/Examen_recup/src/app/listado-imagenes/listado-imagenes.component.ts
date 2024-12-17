import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ServicioService } from '../servicio.service';
import { Imagenes } from '../imagenes';

@Component({
  selector: 'app-listado-imagenes',
  templateUrl: './listado-imagenes.component.html',
  styleUrls: ['./listado-imagenes.component.css'],
})
export class ListadoImagenesComponent implements OnInit {
  datasource = new MatTableDataSource<Imagenes>();
  columnas: string[] = ['id', 'imagen', 'texto', 'subtexto', 'activo']

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private servicio: ServicioService, public dialog: MatDialog) {}

  ngOnInit(): void {
    // Cargar los datos del JSON
    this.servicio.cargarimagenes().subscribe((data) => {
      this.datasource.data = data;
      this.servicio.setImagenes(data); 
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    });
  }

  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.datasource.filter = filtro.trim().toLowerCase();
  }


}
