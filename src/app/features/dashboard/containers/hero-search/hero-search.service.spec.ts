import { TestBed } from '@angular/core/testing';

import { HeroSearchService } from './hero-search.service';

describe('HeroSearchService', () => {
  let service: HeroSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
