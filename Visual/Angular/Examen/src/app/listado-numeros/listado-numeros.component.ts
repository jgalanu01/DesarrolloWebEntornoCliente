import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ServicioService } from '../servicio.service';
import { AniadirComponent } from '../aniadir/aniadir.component';
import { ClaseNumero } from '../clase-numero';


@Component({
  selector: 'app-listado-numeros',
  templateUrl: './listado-numeros.component.html',
  styleUrls: ['./listado-numeros.component.css'],
})
export class ListadoNumerosComponent implements OnInit {
  //Datos
  datasource=new MatTableDataSource<ClaseNumero>();
  //Columnas

  columnas: string[]=[
    'id',
    'N1',
    'N2',
    'N3',
    'N4',
    'N5',
    'N6',
    'ELIMINAR',
    'MODIFICAR',
  ];

  @ViewChild(MatPaginator)paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatTable) tabla1!:MatTable<ClaseNumero>;

  constructor(private servicio: ServicioService, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.datasource.data=this.servicio.getNumeros();

    setTimeout(()=>{

      this.datasource.paginator=this.paginator;
      this.datasource.sort=this.sort;

    });

  }

  private actualizarDataSource(): void {

    this.datasource.data = this.servicio.getNumeros();
    this.datasource.paginator = this.paginator;
  }

  // Aplica un filtro en la tabla
  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.datasource.filter = filtro.trim().toLowerCase();
  }

  // Eliminar tupla por id
  borrarFila(id: number) {
    if (confirm('Quiere borrarlo?')) {
      this.servicio.deleteNumeros(id);
      this.actualizarDataSource();
    }
  }


  abrirDialogo() {
    const dialogo1 = this.dialog.open(AniadirComponent, {
      data: new ClaseNumero(0,0,0,0,0,0,0),
    });


    dialogo1.afterClosed().subscribe((numero: ClaseNumero) => {
      if (numero) {
        // Si el usuario confirma
        this.servicio.addNumeros(numero);
        this.actualizarDataSource();
      }
    });
  }


  abrirDialogoModificar(numero: ClaseNumero) {
    const dialogo1 = this.dialog.open(AniadirComponent, {
      data: { ...numero },
    });

    // Se ejecuta al cerrar el diálogo
    dialogo1.afterClosed().subscribe((numeroEditado: ClaseNumero) => {
      if (numeroEditado) {
        this.servicio.editTupla(numeroEditado);
        this.actualizarDataSource();
      }
    });
  }



}
