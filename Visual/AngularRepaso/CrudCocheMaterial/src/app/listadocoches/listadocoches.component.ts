import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Clasecoche } from '../clasecoche';
import { ServicioCochesService } from '../serviciocoche.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { InsertarcocheComponent } from '../insertarcoche/insertarcoche.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listadocoches',
  templateUrl: './listadocoches.component.html',
  styleUrls: ['./listadocoches.component.css'],
})
export class ListadocochesComponent {
  coche!: Clasecoche;
  crearcoche() {
    const cuadroEmergente = this.cuadroDialogo.open(InsertarcocheComponent, {
      data: new Clasecoche('', '', '', '', 0, 0, 0, ''),
    });

    //despues de cerrar el coche
    cuadroEmergente.afterClosed().subscribe((coche) => {
      //si hay datos
      if (coche != undefined) {
        //llamar al servicio de crearcoche
        this.http.crearCoche(coche).subscribe((resultado: Clasecoche) => {
          this.coche = resultado;
          //Refrescar la tabla
          this.http.leerCoches().subscribe((x: Clasecoche[]) => {
            this.dataSource.data = x;
          });
        }); //fin de servicio (crear y posteriormente leer)
      } //coche con datos
    }); //cerrar el afterclosed (fin del formulario emergente)
  } //fin de crear coche
  constructor(
    public cuadroDialogo: MatDialog,
    private http: ServicioCochesService
  ) {
    this.http.leerCoches().subscribe((x: Clasecoche[]) => {
      this.dataSource.data = x;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  eliminarCoche(coche: Clasecoche) {
    if (confirm('Estás seguro de eliminar el coche:' + coche.matricula))
      this.http.eliminarCoche(coche).subscribe((x: Clasecoche) => {
        this.http.leerCoches().subscribe((x: Clasecoche[]) => {
          this.dataSource.data = x;
        });
      });
  }
  editarCoche(coche: Clasecoche) {
    const cuadroEmergente = this.cuadroDialogo.open(InsertarcocheComponent, {
      data: new Clasecoche(coche.matricula,coche.color,coche.marca,coche.modelo,coche.consumo,coche.precio,coche.kms,coche.tipoMotor),
    });

    //despues de cerrar el coche
    cuadroEmergente.afterClosed().subscribe(coche => {
      //si hay datos
      if (coche != undefined) {
        //llamar al servicio de crearcoche
        this.http.modificarCoche(coche).subscribe((resultado: Clasecoche) => {
          this.coche = resultado;
          //Refrescar la tabla
          this.http.leerCoches().subscribe((x: Clasecoche[]) => {
            this.dataSource.data = x;
          });
        }); //fin de servicio (crear y posteriormente leer)
      } //coche con datos
    }) //cerrar el afterclosed (fin del formulario emergente)
  } //fin de crear coche



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
