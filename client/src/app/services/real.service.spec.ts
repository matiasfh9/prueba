import { TestBed } from '@angular/core/testing';

import { RealService } from './real.service';

describe('RealService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealService = TestBed.get(RealService);
    expect(service).toBeTruthy();
  });
});
