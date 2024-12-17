import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from './productos';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  private productos:Productos[] = [];

  constructor(private http: HttpClient) {}

  cargarProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>('assets/getProductos.json');
  }

  setProductos(data: Productos[]): void {
    this.productos = data;

  }

  getProductos(): Productos[] {
    return this.productos;
  }
}
