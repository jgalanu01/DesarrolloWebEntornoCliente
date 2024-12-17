export class Productos {
  id: number;
  name: string;
  price: number;
  photo: string;
  active: number;
  stockActual: number;
  stockMinimo: number;

  constructor(
    id: number,
    name: string,
    price: number,
    photo: string,
    active: number,
    stockActual: number,
    stockMinimo: number,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.photo = photo;
    this.active = active;
    this.stockActual=stockActual
    this.stockMinimo=stockMinimo
  }
}
