import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruta } from './fruta';


@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  private frutas:Fruta[] = [];
  constructor(private http: HttpClient) { }

  getFrutas():Observable<Fruta[]>{
const ruta:string:'assets/precios.txt'
  return.this.http.get(ruta,{responseType:'text'})
  }

  }
  procesarFrutas(data:string):Fruta[]{
  const frutas:Fruta[]=[];
  const lineas=data.split('\n');
  for (let linea of lineas){
    const partes=linea.split(':');
    frutas.push(new Fruta(partes[0],parseInt(partes[1])));

  }

}









