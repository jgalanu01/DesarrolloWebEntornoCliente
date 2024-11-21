import { Component } from '@angular/core';
import { ProductoModule } from '../producto/producto.module';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent {
  listaProductos!: ProductoModule[];
  constructor(private httpCliente: ServicioService) {
    this.httpCliente.leerProductos().
    subscribe((producto: ProductoModule[]) => {
      this.listaProductos = producto;
    });

  }


}
