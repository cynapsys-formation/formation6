import { TestBed, inject } from '@angular/core/testing';

import { ExponentialService } from './exponential.service';

describe('ExponentialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExponentialService]
    });
  });

  it('should be created', inject([ExponentialService], (service: ExponentialService) => {
    expect(service).toBeTruthy();
  }));
});
