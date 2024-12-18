import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosRedInternetComponent } from './servicios-red-internet.component';

describe('ServiciosRedInternetComponent', () => {
  let component: ServiciosRedInternetComponent;
  let fixture: ComponentFixture<ServiciosRedInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosRedInternetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosRedInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
