import { TestBed } from '@angular/core/testing';

import { BookGuardService } from './book-guard.service';

describe('BookGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookGuardService = TestBed.get(BookGuardService);
    expect(service).toBeTruthy();
  });
});
