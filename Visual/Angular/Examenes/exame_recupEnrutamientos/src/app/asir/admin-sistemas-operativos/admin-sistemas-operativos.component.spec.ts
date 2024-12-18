import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSistemasOperativosComponent } from './admin-sistemas-operativos.component';

describe('AdminSistemasOperativosComponent', () => {
  let component: AdminSistemasOperativosComponent;
  let fixture: ComponentFixture<AdminSistemasOperativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSistemasOperativosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSistemasOperativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
