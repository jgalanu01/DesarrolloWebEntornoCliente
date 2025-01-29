import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Mensaje } from '../mensaje';
import { ServicioclienteService } from '../serviciocliente.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
recargar() {
  this.servicio.leerMensajes().subscribe((resultado: Mensaje[]) => {
    this.dataSource.data = resultado;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

})
}
  enviarMensaje() {
    this.mensaje.usuario = this.nUsuario || ''
    //Formatear la fecha
    this.mensaje.fecha = new Date().toLocaleString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    this.servicio.escribirMensaje(this.mensaje).subscribe(() => {
      this.servicio.leerMensajes().subscribe((resultado: Mensaje[]) => {
        this.dataSource.data = resultado;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      });
    });

  }
  constructor(
    private servicio: ServicioclienteService,
    private route: Router
  ) {}
  dataSource = new MatTableDataSource<Mensaje>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  nUsuario!: string | null;
  mensaje: Mensaje = {
    id: 0,
    fecha: '',
    usuario: '',
    mensaje: '',
    destinatario: 'todos',
    activo: 1,
  };

  displayedColumns: string[] = ['id', 'fecha', 'usuario', 'mensaje'];

  ngOnInit(): void {
    this.nUsuario = sessionStorage.getItem('Nombre');
    if (this.nUsuario == null) {
      this.dataSource = new MatTableDataSource<Mensaje>();
    } else {
      this.servicio.leerMensajes().subscribe((resultado: Mensaje[]) => {
        this.dataSource.data = resultado;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }

  cerrarSesion() {
    sessionStorage.removeItem('Nombre');
    this.nUsuario = 'Sesión cerrada';
    this.route.navigate(['login']);
    this.dataSource = new MatTableDataSource<Mensaje>();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  tabla!: MatTable<Mensaje>;
}
