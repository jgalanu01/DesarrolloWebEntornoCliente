export class Futbolista {
  id!: string;
  nombre!: string;
  posicion!: string;
  equipo!: string;
  goles!: number;

  constructor(id: string, nombre: string, posicion: string, equipo: string, goles: number) {
    this.id = id;
    this.nombre = nombre;
    this.posicion = posicion;
    this.equipo = equipo;
    this.goles = goles;
  }
}
