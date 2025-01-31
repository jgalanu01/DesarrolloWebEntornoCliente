import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Mensaje } from '../mensaje';
import { ServicioclienteService } from '../serviciocliente.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat-p.component.html',
  styleUrls: ['./chat-p.component.css'],
})
export class ChatPComponent implements OnInit {
  servicio: any;
  route: any;
constructor(private httpCliente:ServicioclienteService){

}
  msjchat = {
    id:0,
    usuario:'',
    fecha:'',
    mensaje:'',
    destinatario: '',
    activo:1
  };

  miParametro: string = '';
  nUsuario: string | null = null;

  dataSource = new MatTableDataSource<Mensaje>();
  displayedColumns: string[] = ['id', 'fecha', 'usuario', 'mensaje', 'destinatario'];

  mensaje: Mensaje = {
    id: 0,
    fecha: '',
    usuario: '',
    mensaje: '',
    destinatario: 'todos',
    activo: 1,
  };



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tabla!: MatTable<Mensaje>;

  ngOnInit(): void {

    //si no hay usuario logeado se resetea el datasource
    if (sessionStorage.getItem('Nombre')==null) {
      this.dataSource = new MatTableDataSource<Mensaje>();

  }else{
    this.nUsuario=sessionStorage.getItem('Nombre')||'';
    this.httpCliente.leerMensajesP(this.nUsuario).subscribe((resultado: Mensaje[]) => {
      this.dataSource.data=resultado;
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });

  }
}

  recargar() {
    this.servicio.leerMensajes().subscribe((resultado: Mensaje[]) => {
      this.dataSource.data = resultado;

      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
    });
  }

  enviarMensaje() {
  this.msjchat.usuario=sessionStorage.getItem('Nombre')||'';
  this.msjchat.fecha=new Date().toLocaleString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
   this.httpCliente.insertarMensajeP(this.mensaje).subscribe(
    ()=>{

    }
   )
    }

    const nuevoMensaje: Mensaje = {
      id: 0, // Se genera en backend
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

    this.servicio.escribirMensaje(nuevoMensaje).subscribe(() => {
      this.recargar();
      this.msjchat.mensaje = ''; // Limpiar el input
    });
  }

  cerrarSesion() {
    sessionStorage.removeItem('Nombre');
    this.nUsuario = null;
    this.route.navigate(['login']);
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
