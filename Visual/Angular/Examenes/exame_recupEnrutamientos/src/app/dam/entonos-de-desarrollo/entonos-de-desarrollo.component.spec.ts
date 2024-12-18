import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntonosDeDesarrolloComponent } from './entonos-de-desarrollo.component';

describe('EntonosDeDesarrolloComponent', () => {
  let component: EntonosDeDesarrolloComponent;
  let fixture: ComponentFixture<EntonosDeDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntonosDeDesarrolloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntonosDeDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
