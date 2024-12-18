import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fruta } from './fruta';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  constructor(private http: HttpClient) {}

  // Método para obtener y procesar las frutas desde el archivo de texto
  getFrutas(): Observable<Fruta[]> {
    const ruta: string = 'assets/precios.txt';


    return this.http.get(ruta, { responseType: 'text' }).pipe(
      map((data: string) => this.procesarFrutas(data))
    );
  }

  
  private procesarFrutas(data: string): Fruta[] {
    const frutas: Fruta[] = [];
    const lineas = data.split('\n');
    for (let linea of lineas) {
      const partes = linea.split(':');
      if (partes.length === 2) {
        frutas.push(new Fruta(partes[0].trim(), parseInt(partes[1].trim())));
      }
    }
    return frutas;
  }
}
