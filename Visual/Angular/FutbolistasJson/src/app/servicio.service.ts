import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Futbolistas } from './futbolistas';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  private futbolistas: Futbolistas[] = [];

  constructor(private http: HttpClient) {}

  cargarFutbolistas(): Observable<Futbolistas[]> {
    return this.http.get<Futbolistas[]>('assets/futbolistas.json');
  }

  setFutbolistas(data: Futbolistas[]): void {
    this.futbolistas = data; // Guardar datos cargados en memoria
  }

  getFutbolistas(): Futbolistas[] {
    return this.futbolistas;
  }

  addFutbolista(futbolista: Futbolistas): void {
    this.futbolistas.push(futbolista);
  }

  editFutbolista(futbolistaOriginal: Futbolistas, futbolistaEditado: Futbolistas): void {
    const index = this.futbolistas.indexOf(futbolistaOriginal);
    if (index !== -1) {
      this.futbolistas[index] = futbolistaEditado;
    }
  }

  deleteFutbolista(id: string): void {
    this.futbolistas = this.futbolistas.filter((f) => f.id !== id);
  }
}
