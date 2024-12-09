import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { Empleado } from '../empleado';
import { ServEmpleadoService } from '../serv-empleado.service';

@Component({
  selector: 'app-cuadro-dialogo-empleado',
  templateUrl: './cuadro-dialogo-empleado.component.html',
  styleUrls: ['./cuadro-dialogo-empleado.component.css']
})
export class CuadroDialogoEmpleadoComponent {



  modificar(empleado: Empleado) {
    const dialogo1 = this.dialog.open(DialogoComponent, {
      data: new Empleado(empleado.id,empleado.nombre,empleado.direccion,empleado.cargo,empleado.edad,empleado.imagen),
      width: '250px',
    });

    dialogo1.afterClosed().subscribe(emp => {
      if (emp != undefined){
        this.httpCliente.modificarEmpleado(emp).subscribe(resultado => this.emple) 
      }
    });
  }


  emple!: Empleado;
  eliminar(id: number) {
    this.httpCliente.eliminarEmpleado(id).subscribe((x: Empleado) => {
      this.emple = x;
    });
  }



  abrirDialogo() {
    const dialogo1 = this.dialog.open(DialogoComponent, {
      data: new Empleado(0, '', '', '', 0, ''),
      width: '250px',
    });

    dialogo1.afterClosed().subscribe(emp => {
      if (emp != undefined)
        this.agregar(emp);
    });
  }
  agregar(emp: Empleado) {
    this.datos.push(new Empleado(emp.id, emp.nombre, emp.direccion,
      emp.cargo, emp.edad, emp.imagen));

    this.httpCliente.insertarEmpleado(emp).subscribe((resultado: Empleado) => {
      this.empleado = resultado;
      this.ds.data = [...this.datos];
    });
  }

  title = 'angular-Material';
  datos: Empleado[] = [];

  columnas: string[] = ['id', 'nombre', 'direccion', 'cargo', 'edad', 'imagen', 'modificar', 'eliminar'];
  @ViewChild(MatTable) table: MatTable<Empleado> | undefined;
  ds = new MatTableDataSource<Empleado>();
  urlString: string = "http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php"
  empleado: Empleado = new Empleado(0, '', '', '', 0, '');
  constructor(public dialog: MatDialog, private httpCliente: ServEmpleadoService) {

  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.httpCliente.leerEmpleado().subscribe((res: Empleado[]) => {
      this.ds.data = res;
      this.datos = res;
    });
  }
  ngAfterViewInit() {
    this.ds.paginator = this.paginator;
    this.ds.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.ds.filter = filterValue.trim().toLowerCase();

    if (this.ds.paginator) {
      this.ds.paginator.firstPage();
    }
  }
}





