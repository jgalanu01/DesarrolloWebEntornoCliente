import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDialogoEmpleadoComponent } from './cuadro-dialogo-empleado.component';

describe('CuadroDialogoEmpleadoComponent', () => {
  let component: CuadroDialogoEmpleadoComponent;
  let fixture: ComponentFixture<CuadroDialogoEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroDialogoEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroDialogoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
