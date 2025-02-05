import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Mensaje } from '../mensaje';
import { ServicioclienteService } from '../serviciocliente.service';

@Component({
  selector: 'app-chat-p',
  templateUrl: './chat-p.component.html',
  styleUrls: ['./chat-p.component.css'],
})
export class ChatPComponent implements OnInit {
  msjchat = {
    id: 0,
    usuario: '',
    fecha: '',
    mensaje: '',
    destinatario: '',
    activo: 1,
  };

  miParametro: string = '';
  nUsuario: string | null = null;
  dataSource = new MatTableDataSource<Mensaje>();
  displayedColumns: string[] = ['id', 'fecha', 'usuario', 'mensaje', 'destinatario'];

  constructor(private servicio: ServicioclienteService, private route: Router) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tabla!: MatTable<Mensaje>;

  ngOnInit(): void {
    this.nUsuario = sessionStorage.getItem('Nombre') || '';

    if (!this.nUsuario) {
      console.warn('No hay usuario en sessionStorage. Redirigiendo al login...');
      this.route.navigate(['/chat-p']);
    } else {
      this.cargarMensajes();
    }
  }

  cargarMensajes() {
    if (!this.nUsuario) return;

    this.servicio.leerMensajesP(this.nUsuario).subscribe((resultado: Mensaje[]) => {
      console.log('Mensajes recibidos:', resultado);
      this.dataSource.data = resultado;
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
    });
  }

  recargar() {
    this.cargarMensajes();
  }

  enviarMensaje() {
    if (!this.msjchat.mensaje.trim() || !this.msjchat.destinatario.trim()) {
      console.warn('El mensaje o el destinatario están vacíos');
      return;
    }

    const nuevoMensaje: Mensaje = {
      id: 0, // El backend genera el ID
      fecha: new Date().toLocaleString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }),
      usuario: this.nUsuario || 'Desconocido',
      mensaje: this.msjchat.mensaje,
      destinatario: this.msjchat.destinatario,
      activo: 1,
    };

    this.servicio.insertarMensajeP(nuevoMensaje).subscribe(() => {
      this.recargar();
      this.msjchat.mensaje = '';
    });
  }

  cerrarSesion() {
    sessionStorage.removeItem('Nombre');
    this.nUsuario = null;
    this.route.navigate(['/login']);
    this.dataSource = new MatTableDataSource<Mensaje>();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
