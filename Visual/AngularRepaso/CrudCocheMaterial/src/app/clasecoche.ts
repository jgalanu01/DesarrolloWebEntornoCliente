export class Clasecoche {
  matricula!:string;
  color!:string;
  marca!:string;
  modelo!:string;
  consumo!:number;
  precio!:number;
  kms!:number;
  tipoMotor!:string;

  constructor(matricula:string,color:string,marca:string,modelo:string,consumo:number,precio:number,kms:number,tipoMotor:string){
    this.matricula=matricula;
    this.color=color;
    this.marca=marca;
    this.modelo=modelo;
    this.consumo=consumo;
    this.precio=precio;
    this.kms=kms;
    this.tipoMotor=tipoMotor;
  }
}
