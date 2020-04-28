import { TestBed } from '@angular/core/testing';

import { AddoffersService } from './addoffers.service';

describe('AddoffersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddoffersService = TestBed.get(AddoffersService);
    expect(service).toBeTruthy();
  });
});
