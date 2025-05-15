import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Clasecoche } from '../clasecoche';
import { ServicioCochesService } from '../serviciocoche.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-listadocoches',
  templateUrl: './listadocoches.component.html',
  styleUrls: ['./listadocoches.component.css'],
})
export class ListadocochesComponent {
  constructor(private http: ServicioCochesService) {
    this.http.leerCoches().subscribe((x: Clasecoche[]) => {
      this.dataSource.data = x;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  eliminarCoche(coche: Clasecoche) {}
  editarCoche(coche: Clasecoche) {}

  //View child está en la chuleta de angular material
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<Clasecoche>();
  displayedColumns: String[] = [
    'matricula',
    'color',
    'marca',
    'modelo',
    'consumo',
    'precio',
    'kms',
    'tipoMotor',
    'editar',
    'eliminar',
  ]; //Columndef del html de la tabka
  applyFilter($event: KeyboardEvent) {
    //Todo esto hacia abajo está en la chuleta de material
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
