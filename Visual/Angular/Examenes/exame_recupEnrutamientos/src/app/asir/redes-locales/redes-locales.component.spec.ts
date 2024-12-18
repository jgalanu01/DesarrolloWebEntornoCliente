import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesLocalesComponent } from './redes-locales.component';

describe('RedesLocalesComponent', () => {
  let component: RedesLocalesComponent;
  let fixture: ComponentFixture<RedesLocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesLocalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
