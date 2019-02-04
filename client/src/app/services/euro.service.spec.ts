import { TestBed } from '@angular/core/testing';

import { euroService } from './euro.service';

describe('EuroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: euroService = TestBed.get(euroService);
    expect(service).toBeTruthy();
  });
});
