import { TestBed } from '@angular/core/testing';

import { ItemsSkipTestsService } from './items--skip-tests.service';

describe('ItemsSkipTestsService', () => {
  let service: ItemsSkipTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsSkipTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
