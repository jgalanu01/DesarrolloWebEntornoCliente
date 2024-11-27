import { Component } from '@angular/core';
import { FrutaModule } from '../fruta/fruta.module';
import { ServFrutaService } from '../serv-fruta.service';


@Component({
  selector: 'app-fruteria',
  templateUrl: './fruteria.component.html',
  styleUrls: ['./fruteria.component.css']
})
export class FruteriaComponent {
mensajes: any;
resetearFormulario() {
throw new Error('Method not implemented.');
}

  //Método seleccionar producto para actualizarlo después. Precarga en el formulario los valores actuales.

seleccionarProductos(f:FrutaModule){
  this.frutaSeleccionada=f;

}

//Método que llama al servicio modificar (seleccionarProductos)
ActualizarProducto(f:{value:FrutaModule}) {
  this.httpFruta.actualizarFruta(f.value).
  subscribe((f:FrutaModule)=>{this.fruta=f;
  //despues de modificar refrescar pantalla
  this.httpFruta.leerFrutas().subscribe(x=>this.listaFrutas=x)

})

}

  //Método eliminar

  eliminar (id:number){
    this.httpFruta.eliminarFruta(id).
    subscribe((x:FrutaModule)=>{
      this.fruta=x;
      //refrescar pantalla
      this.httpFruta.leerFrutas().subscribe(x=>this.listaFrutas=x)
    });
  }


  fruta!: FrutaModule;
  frutaSeleccionada: FrutaModule={
    id:0,
    nombre:'',
    precio:0,
    unidades:0,
    imagen:''
  }



//Insertar producto
AniadirProducto(form:{value:FrutaModule;}) {
  this.httpFruta.crearFruta(form.value).subscribe((p:FrutaModule)=>{this.fruta=p;
    this.httpFruta.leerFrutas().subscribe(x=>this.listaFrutas=x)
  });



}
  listaFrutas!: FrutaModule[];
  constructor(private httpFruta: ServFrutaService) {
    this.httpFruta.leerFrutas().subscribe(x=>this.listaFrutas=x);

  }



}
