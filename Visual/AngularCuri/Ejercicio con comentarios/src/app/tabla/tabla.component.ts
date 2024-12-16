import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Coche } from '../coche';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit,AfterViewInit {
  //**Lo último en copiar */
abrirDialogoModificar(coche: Coche) {
  const dialogo1 = this.dialog.open(DialogoComponent, {
    data: new Coche(coche.matricula,coche.marcaModelo,coche.km,coche.color)
  });

  dialogo1.afterClosed().subscribe((coche: Coche) => {
    if (coche != undefined){
    let cocheBuscado = this.datos.find(vehiculo => vehiculo.matricula === coche.matricula);
    if (cocheBuscado) {
      cocheBuscado.color=coche.color
      cocheBuscado.km=coche.km
      cocheBuscado.marcaModelo=coche.marcaModelo
    }
  }
      this.tabla1.renderRows();
    });
}
//**hasta aquí */
//*desde aqui */
borrarFila(matricula: string) {
  if (confirm("Realmente quiere borrarlo?")) {
    const i = this.datos.findIndex(vehiculo => vehiculo.matricula === matricula);
    this.datos.splice(i,1);
    this.tabla1.renderRows();
  }
  //**hasta aqui , lo tercero */
}
//****crear una clase para llamarla mas adelante */
  coche!: Coche
  //**** */
  datos: Coche[] =[
    {
      matricula: "ABC1234",
      marcaModelo: "Toyota Corolla 2020",
      km: 15000,
      color: "Rojo"
    },
    {
      matricula: "XYZ5678",
      marcaModelo: "Honda Civic 2018",
      km: 35000,
      color: "Azul"
    },
    {
      matricula: "LMN9012",
      marcaModelo: "Ford Focus 2019",
      km: 22000,
      color: "Negro"
    },
    {
      matricula: "PQR3456",
      marcaModelo: "Chevrolet Spark 2021",
      km: 5000,
      color: "Blanco"
    },
    {
      matricula: "TUV7890",
      marcaModelo: "Mazda 3 2022",
      km: 12000,
      color: "Gris"
    }
  ];
  //********DESDE AQUÍ */
  //**cambiar Coche */
  datasource=new MatTableDataSource<Coche>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatTable)
  tabla1!: MatTable<Coche>;
  //*** Cambiar th */
  columnas: string[] = ['matricula', 'marcaModelo', 'km', 'color','eliminar', 'modificar'];
  constructor( public dialog: MatDialog){}
  ngAfterViewInit(): void {
    this.datasource.paginator=this.paginator
    this.datasource.sort=this.sort
  }
  //***********HASTA AQUÍ LO PRIMERO */

  //***Desde aqui */
abrirDialogo() {
  const dialogo1 = this.dialog.open(DialogoComponent, {
    data: new Coche('','',0,'')
  });
  dialogo1.afterClosed().subscribe((coche: Coche) => {
    if (coche != undefined)
      this.datos.push(coche);
      this.tabla1.renderRows();
   });
}
//***HASTA AQUI , LO CUARTO */
//******Desde aqui */
applyFilter(event: KeyboardEvent) {
  const filtro = (event.target as HTMLInputElement).value;
  this.datasource.filter = filtro.trim().toLowerCase();
}

ngOnInit(): void {
  this.datasource.data=this.datos
  this.datasource.paginator=this.paginator;
  this.datasource.sort=this.sort;
}
//***Hasta aqui segundo, no se cambia NADA */

}



