import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModule } from './producto/producto.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpClient: HttpClient) { }

  leerProductos(): Observable<ProductoModule[]> {
    return this.httpClient.get<ProductoModule[]>('http://moralo.atwebpages.com/menuAjax/productos2/index.php');
  }
}
