import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ServicioService } from '../servicio.service';
import { AniadirComponent } from '../aniadir/aniadir.component';
import { Futbolistas } from '../futbolistas';

@Component({
  selector: 'app-listado-futbolista',
  templateUrl: './listado-futbolista.component.html',
  styleUrls: ['./listado-futbolista.component.css'],
})
export class ListadoFutbolistaComponent implements OnInit {
  datasource = new MatTableDataSource<Futbolistas>();
  columnas: string[] = ['id', 'nombre', 'posicion', 'equipo', 'goles', 'modificar', 'eliminar'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private servicio: ServicioService, public dialog: MatDialog) {}

  ngOnInit(): void {
    // Cargar los datos del JSON
    this.servicio.cargarFutbolistas().subscribe((data) => {
      this.datasource.data = data;
      this.servicio.setFutbolistas(data); // Guardar los datos en el servicio para mantenerlos en memoria
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    });
  }

  private actualizarDataSource(): void {
    this.datasource.data = this.servicio.getFutbolistas();
    this.datasource.paginator = this.paginator;
  }

  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.datasource.filter = filtro.trim().toLowerCase();
  }

  borrarFila(id: string) {
    if (confirm('¿Realmente quiere borrarlo?')) {
      this.servicio.deleteFutbolista(id);
      this.actualizarDataSource();
    }
  }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(AniadirComponent, {
      data: new Futbolistas('', '', '', '', 0),
    });

    dialogo1.afterClosed().subscribe((futbolista: Futbolistas) => {
      if (futbolista) {
        this.servicio.addFutbolista(futbolista);
        this.actualizarDataSource();
      }
    });
  }

  abrirDialogoModificar(futbolista: Futbolistas) {
    const dialogo1 = this.dialog.open(AniadirComponent, {
      data: { ...futbolista },
    });

    dialogo1.afterClosed().subscribe((futbolistaEditado: Futbolistas) => {
      if (futbolistaEditado) {
        this.servicio.editFutbolista(futbolista, futbolistaEditado);
        this.actualizarDataSource();
      }
    });
  }
}
