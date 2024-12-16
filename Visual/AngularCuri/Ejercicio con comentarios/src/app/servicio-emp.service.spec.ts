import { TestBed } from '@angular/core/testing';

import { ServicioEmpService } from './servicio-emp.service';

describe('ServicioEmpService', () => {
  let service: ServicioEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
