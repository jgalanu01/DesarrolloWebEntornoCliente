import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoADatosComponent } from './acceso-a-datos.component';

describe('AccesoADatosComponent', () => {
  let component: AccesoADatosComponent;
  let fixture: ComponentFixture<AccesoADatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoADatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoADatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
