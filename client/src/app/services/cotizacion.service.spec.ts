import { TestBed } from '@angular/core/testing';

import { cotizacionService } from './cotizacion.service';

describe('cotizacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: cotizacionService = TestBed.get(cotizacionService);
    expect(service).toBeTruthy();
  });
});
