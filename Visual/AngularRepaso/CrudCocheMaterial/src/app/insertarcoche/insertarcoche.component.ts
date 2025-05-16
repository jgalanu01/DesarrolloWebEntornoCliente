import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Clasecoche } from '../clasecoche';

@Component({
  selector: 'app-insertarcoche',
  templateUrl: './insertarcoche.component.html',
  styleUrls: ['./insertarcoche.component.css']
})
export class InsertarcocheComponent {
Cancelar() {
  this.dialogoRef.close();

}

constructor(public dialogoRef:MatDialogRef<InsertarcocheComponent>,
@ Inject (MAT_DIALOG_DATA ) public data:Clasecoche){}


}
