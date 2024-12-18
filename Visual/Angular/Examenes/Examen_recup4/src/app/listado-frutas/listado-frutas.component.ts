import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicioService } from '../servicios.service';
import { Fruta } from '../fruta';

@Component({
  selector: 'app-listado-frutas',
  templateUrl: './listado-frutas.component.html',
  styleUrls: ['./listado-frutas.component.css'],
})
export class ListadoFrutasComponent implements OnInit {
  datasource = new MatTableDataSource<Fruta>();
  columnas: string[] = ['nombre', 'precio'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private servicio: ServicioService, public dialog: MatDialog) {}

  ngOnInit(): void {
    // Cargar los datos del archivo de texto
    this.servicio.getFrutas().subscribe((data: Fruta[]) => {
      this.datasource.data = data; 
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    });
  }

  // Filtro para la tabla
  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.datasource.filter = filtro.trim().toLowerCase();
  }
}
