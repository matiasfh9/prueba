import { TestBed } from '@angular/core/testing';

import { dolarService } from './dolar.service';

describe('DolarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: dolarService = TestBed.get(dolarService);
    expect(service).toBeTruthy();
  });

  
});
