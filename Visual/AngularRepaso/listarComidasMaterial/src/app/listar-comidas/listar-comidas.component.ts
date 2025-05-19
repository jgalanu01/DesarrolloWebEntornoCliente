import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Comidas } from '../comidas';
import { ServiciocomidaService } from '../serviciocomida.service';

@Component({
  selector: 'app-listar-comidas',
  templateUrl: './listar-comidas.component.html',
  styleUrls: ['./listar-comidas.component.css']
})
export class ListarComidasComponent {
eliminar(arg0: any) {
throw new Error('Method not implemented.');
}
modificar(arg0: any) {
throw new Error('Method not implemented.');
}

  constructor(private http:ServiciocomidaService){
    this.http.leerComida().subscribe((x)=>{
      this.dataSource.data=x;
    })

  }

applyFilter(event: KeyboardEvent) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

displayedColumns: string[] = ['nombre', 'procedencia', 'temperatura', 'tipo','popularidad','Eliminar','Modificar'];
dataSource=new MatTableDataSource<Comidas>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

}
