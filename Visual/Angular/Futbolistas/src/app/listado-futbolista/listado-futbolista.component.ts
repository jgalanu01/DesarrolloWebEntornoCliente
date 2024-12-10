import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AniadirComponent } from '../aniadir/aniadir.component';
import { Futbolista } from '../futbolista';

@Component({
  selector: 'app-listado-futbolista',
  templateUrl: './listado-futbolista.component.html',
  styleUrls: ['./listado-futbolista.component.css']
})
export class ListadoFutbolistaComponent implements OnInit {

  futbolistas: Futbolista[] = [
    new Futbolista('1', 'Lionel Messi', 'Delantero', 'Inter Miami', 40),
    new Futbolista('2', 'Cristiano Ronaldo', 'Delantero', 'Al-Nassr', 45),
    new Futbolista('3', 'Kylian Mbappé', 'Delantero', 'Real Madrid', 50),
    new Futbolista('4', 'Kevin De Bruyne', 'Mediocampista', 'Manchester City', 20),
    new Futbolista('5', 'Virgil van Dijk', 'Defensa', 'Liverpool', 5),
    new Futbolista('6', 'Thibaut Courtois', 'Portero', 'Real Madrid', 0),
  ];

  datasource = new MatTableDataSource<Futbolista>();
  columnas: string[] = ['id', 'nombre', 'posicion', 'equipo', 'goles', 'eliminar', 'modificar'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tabla1!: MatTable<Futbolista>;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.datasource.data = this.futbolistas;
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.datasource.filter = filtro.trim().toLowerCase();
  }

  borrarFila(id: string) {
    if (confirm("¿Realmente quiere borrarlo?")) {
      const index = this.futbolistas.findIndex(f => f.id === id);
      this.futbolistas.splice(index, 1);
      this.datasource.data = [...this.futbolistas]; // Refresca los datos
      this.tabla1.renderRows();
    }
  }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(AniadirComponent, {
      data: new Futbolista('', '', '', '', 0)
    });

    dialogo1.afterClosed().subscribe((futbolista: Futbolista) => {
      if (futbolista) {
        this.aniadir(futbolista);
      }
    });
  }

  aniadir(futbolista: Futbolista) {
    this.futbolistas.push(futbolista);
    this.datasource.data = [...this.futbolistas];
    this.tabla1.renderRows();
  }

  abrirDialogoModificar(futbolista: Futbolista) {
    const dialogo1 = this.dialog.open(AniadirComponent, {
      data: { ...futbolista }
    });

    dialogo1.afterClosed().subscribe((futbolistaEditado: Futbolista) => {
      if (futbolistaEditado) {
        const index = this.futbolistas.findIndex(f => f.id === futbolistaEditado.id);
        this.futbolistas[index] = futbolistaEditado;
        this.datasource.data = [...this.futbolistas];
        this.tabla1.renderRows();
      }
    });
  }
}
