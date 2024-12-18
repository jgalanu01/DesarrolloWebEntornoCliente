import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClaseNumero } from '../clase-numero';

@Component({
  selector: 'app-aniadir',
  templateUrl: './aniadir.component.html',
  styleUrls: ['./aniadir.component.css']
})
export class AniadirComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AniadirComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClaseNumero
  ) { }

  ngOnInit(): void {

  }

  cancelar():void{
    this.dialogRef.close();
  }

}
