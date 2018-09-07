import { TestBed, inject } from '@angular/core/testing';

import { BooksResolveService } from './books-resolve.service';

describe('BooksResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksResolveService]
    });
  });

  it('should be created', inject([BooksResolveService], (service: BooksResolveService) => {
    expect(service).toBeTruthy();
  }));
});
