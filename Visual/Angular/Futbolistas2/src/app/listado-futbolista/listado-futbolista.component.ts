import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Para manejar cuadros de diálogo
import { MatPaginator } from '@angular/material/paginator'; // Para la paginación en la tabla
import { MatSort } from '@angular/material/sort'; // Para el ordenamiento de la tabla
import { MatTable, MatTableDataSource } from '@angular/material/table'; // Para trabajar con la tabla
import { ServicioService } from '../servicio.service'; // Importa el servicio que maneja el array
import { AniadirComponent } from '../aniadir/aniadir.component'; // Componente para añadir/modificar futbolistas
import { Futbolista } from '../futbolista'; // Clase Futbolista para definir el modelo de datos

@Component({
  selector: 'app-listado-futbolista',
  templateUrl: './listado-futbolista.component.html',
  styleUrls: ['./listado-futbolista.component.css'],
})
export class ListadoFutbolistaComponent implements OnInit {
  // Fuente de datos para la tabla
  datasource = new MatTableDataSource<Futbolista>();
  // Columnas visibles en la tabla
  columnas: string[] = [
    'id',
    'nombre',
    'posicion',
    'equipo',
    'goles',
    'eliminar',
    'modificar',
  ];

  // Referencias para la paginación, ordenamiento y renderización de la tabla
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tabla1!: MatTable<Futbolista>;

  // Constructor: inyecta el servicio y el manejador de diálogos
  constructor(private servicio: ServicioService, public dialog: MatDialog) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Obtiene los futbolistas desde el servicio y configura el dataSource
    this.datasource.data = this.servicio.getFutbolistas();

    setTimeout(() => {
      this.datasource.paginator = this.paginator; // Configura la paginación
      this.datasource.sort = this.sort; // Configura el ordenamiento
    });
  }

  // Método para actualizar los datos de la tabla y vincular el paginador
  private actualizarDataSource(): void {
    // Actualiza los datos de la tabla (MatTableDataSource) con los futbolistas del servicio
    this.datasource.data = this.servicio.getFutbolistas();
    // Vincula el objeto paginador a la tabla para que la paginación funcione correctamente
    this.datasource.paginator = this.paginator;
  }

  // Aplica un filtro en la tabla
  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.datasource.filter = filtro.trim().toLowerCase(); // Convierte el filtro a minúsculas y elimina espacios
  }

  // Elimina un futbolista por ID
  borrarFila(id: string) {
    if (confirm('¿Realmente quiere borrarlo?')) {
      this.servicio.deleteFutbolista(id); // Llama al método del servicio para eliminar
      this.actualizarDataSource();
    }
  }

  // Abre el diálogo para añadir un nuevo futbolista
  abrirDialogo() {
    const dialogo1 = this.dialog.open(AniadirComponent, {
      data: new Futbolista('', '', '', '', 0), // Objeto vacío para un nuevo futbolista
    });

    // Se ejecuta al cerrar el diálogo
    dialogo1.afterClosed().subscribe((futbolista: Futbolista) => {
      if (futbolista) {
        // Si el usuario confirma
        this.servicio.addFutbolista(futbolista); // Añade el nuevo futbolista al array en el servicio
        this.actualizarDataSource();
      }
    });
  }

  // Abre el diálogo para modificar un futbolista existente
  abrirDialogoModificar(futbolista: Futbolista) {
    const dialogo1 = this.dialog.open(AniadirComponent, {
      data: { ...futbolista }, // Pasa una copia del objeto seleccionado
    });

    // Se ejecuta al cerrar el diálogo
    dialogo1.afterClosed().subscribe((futbolistaEditado: Futbolista) => {
      if (futbolistaEditado) {
        // Si el usuario confirma
        this.servicio.editFutbolista(futbolistaEditado); // Actualiza el futbolista en el array del servicio
        this.actualizarDataSource();
      }
    });
  }
}
