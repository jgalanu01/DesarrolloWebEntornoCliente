import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent {
  constructor (public dialogRef: MatDialogRef<DialogoComponent>, @Inject(MAT_DIALOG_DATA) public data: Empleado) { }
  



  cancelar() {
    this.dialogRef.close();
  }
}
