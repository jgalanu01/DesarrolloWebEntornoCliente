import { Injectable } from '@angular/core';
import { Futbolista } from './futbolista'; // Modelo para definir las propiedades de un futbolista

@Injectable({
  providedIn: 'root' // Hace que este servicio esté disponible globalmente en la aplicación
})
export class ServicioService {

  // Array inicial con datos de ejemplo
  private futbolistas: Futbolista[] = [
    new Futbolista('1', 'Lionel Messi', 'Delantero', 'Inter Miami', 40),
    new Futbolista('2', 'Cristiano Ronaldo', 'Delantero', 'Al-Nassr', 45),
    new Futbolista('3', 'Kylian Mbappé', 'Delantero', 'Real Madrid', 50),
    new Futbolista('4', 'Kevin De Bruyne', 'Mediocampista', 'Manchester City', 20),
    new Futbolista('5', 'Virgil van Dijk', 'Defensa', 'Liverpool', 5),
    new Futbolista('6', 'Thibaut Courtois', 'Portero', 'Real Madrid', 0),
  ];

  constructor() {}

  // Obtiene todos los futbolistas
  getFutbolistas(): Futbolista[] {
    return this.futbolistas; // Devuelve el array completo
  }

  // Añade un nuevo futbolista al array
  addFutbolista(futbolista: Futbolista): void {
    this.futbolistas.push(futbolista); // Agrega el nuevo futbolista
  }

  // Edita un futbolista existente
  editFutbolista(futbolistaOriginal: Futbolista, futbolistaEditado: Futbolista): void {
    const index = this.futbolistas.indexOf(futbolistaOriginal); // Buscar por referencia del objeto original
    if (index !== -1) {
      this.futbolistas[index] = futbolistaEditado; // Reemplazar la fila completa
    }
  }

  // Elimina un futbolista por ID
  deleteFutbolista(id: string): void {
    this.futbolistas = this.futbolistas.filter(f => f.id !== id); // Filtra los futbolistas que no tienen ese ID
  }
}
