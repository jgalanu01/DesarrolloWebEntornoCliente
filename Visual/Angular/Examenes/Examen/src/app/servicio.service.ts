import { Injectable } from '@angular/core';
import { ClaseNumero } from './clase-numero';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  private numeros: ClaseNumero[] = []; // Array para almacenar las tuplas

  constructor() {
    this.generarLista(); // Generar las tuplas al inicializar el servicio
  }

  // Método para generar 200 tuplas con índices autoincrementados y números aleatorios únicos
  generarLista(): void {
    for (let i = 1; i <= 200; i++) {
      const numerosAleatorios = this.generarNumerosAleatorios(); // Genera 6 números únicos
      const [n1, n2, n3, n4, n5, n6] = numerosAleatorios; // Desestructura los números
      this.numeros.push(new ClaseNumero(i, n1, n2, n3, n4, n5, n6)); // Crea y añade una nueva tupla
    }
  }

  // Generar 6 números aleatorios únicos entre 1 y 100
  private generarNumerosAleatorios(): number[] {
    const numeros = new Set<number>(); // Usamos un Set para garantizar unicidad
    while (numeros.size < 6) {
      const numero = Math.floor(Math.random() * 100) + 1; // Genera un número entre 1 y 100
      numeros.add(numero); // Añade el número al Set (automáticamente evita duplicados)
    }
    return Array.from(numeros); // Convierte el Set en un array
  }

  // Obtener la lista de números
  getNumeros(): ClaseNumero[] {
    return this.numeros;
  }

  // Añadir una nueva tupla
  addNumeros(tupla: ClaseNumero): void {
    this.numeros.push(tupla); // Añade la nueva tupla al array
  }

  editTupla(tuplaOriginal: ClaseNumero, tuplaEditada: ClaseNumero): void {
    const index = this.numeros.indexOf(tuplaOriginal); // Buscar por referencia del objeto original
    if (index !== -1) {
      this.numeros[index] = tuplaEditada; // Reemplazar la tupla completa
    }
  }

  // Eliminar una tupla por índice
  deleteNumeros(indice: number): void {
    this.numeros = this.numeros.filter(n => n.indice !== indice);
  }
}
