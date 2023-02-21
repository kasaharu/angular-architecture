import { TestBed } from '@angular/core/testing';
import { HeroService } from '../../../../infrastructures/api/hero.service';
import { HeroSearchService } from './hero-search.service';

class MockHeroSearchService {}

describe('HeroSearchService', () => {
  let service: HeroSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroSearchService, { provide: HeroService, useClass: MockHeroSearchService }],
    });
    service = TestBed.inject(HeroSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
