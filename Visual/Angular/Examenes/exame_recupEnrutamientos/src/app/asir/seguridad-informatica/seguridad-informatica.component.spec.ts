import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadInformaticaComponent } from './seguridad-informatica.component';

describe('SeguridadInformaticaComponent', () => {
  let component: SeguridadInformaticaComponent;
  let fixture: ComponentFixture<SeguridadInformaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguridadInformaticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguridadInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
