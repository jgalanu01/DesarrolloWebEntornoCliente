import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Coche } from '../coche';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent{
  //**Se copia todo */
  constructor(
    //DialogoComponents se llama igual que el ng g c de  la carpeta + Component
    public dialogRef: MatDialogRef<DialogoComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Coche) {}
Cancelar(){
  this.dialogRef.close();
}
//**Hasta aqui */
}
