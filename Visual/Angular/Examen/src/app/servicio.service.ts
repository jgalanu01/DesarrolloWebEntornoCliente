import { Injectable } from '@angular/core';
import { ClaseNumero } from './clase-numero';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  numAl: number = 0;

  generarLista():number {
    this.numAl = Math.ceil(Math.random() * 100);

    return this.numAl;

  }



  private numeros: ClaseNumero[] = [
    new ClaseNumero(1,15,24,33,47,53,98),
    new ClaseNumero(2,17,29,30,45,56,65),
  ];

  constructor() {
    this.generarLista();
  }

  //Retornar lista. Obtener los números
  getNumeros(): ClaseNumero[] {
    return this.numeros;
  }

  //añadir nuevos numeros
  addNumeros(tupla: ClaseNumero): void {
    this.numeros.push(tupla);
  }

  //actualizar, modificar números

  editTupla(tupla: ClaseNumero): void {
    const index = this.numeros.findIndex(n => n.indice === tupla.indice);
    if (index !== -1) {
      this.numeros[index] = tupla;
    }
  }

  deleteNumeros(indice: number): void {
    this.numeros = this.numeros.filter(n => n.indice != indice);
  }
}
