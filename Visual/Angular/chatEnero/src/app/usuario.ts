export class Usuario {
  idUsuario!:number;
  nombre!:string;
  email!:string;
  pwd!:string;
  activo!:number;
  confirmar: any;


  constructor(idUsuario:number,nombre:string,email:string,pwd:string,activo:number) {
    this.idUsuario=idUsuario;
    this.nombre=nombre;
    this.email=email;
    this.pwd=pwd;
    this.activo=activo;
  }
}

