import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagenes } from './imagenes';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  private imagenes: Imagenes[] = [];

  constructor(private http: HttpClient) {}

  cargarimagenes(): Observable<Imagenes[]> {
    return this.http.get<Imagenes[]>('assets/getImagenes.json');
  }

  setImagenes(data: Imagenes[]): void {
    this.imagenes = data;

  }

  getImagenes(): Imagenes[] {
    return this.imagenes;
  }
}
