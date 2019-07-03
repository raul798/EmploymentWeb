import { TestBed } from '@angular/core/testing';

import { Aith.ServiceService } from './aith.service.service';

describe('Aith.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Aith.ServiceService = TestBed.get(Aith.ServiceService);
    expect(service).toBeTruthy();
  });
});
