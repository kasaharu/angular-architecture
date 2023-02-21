import { TestBed } from '@angular/core/testing';
import { HeroApi } from '../../../../infrastructures/api/hero.api';
import { HeroSearchService } from './hero-search.service';

class MockHeroSearchService {}

describe('HeroSearchService', () => {
  let service: HeroSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroSearchService, { provide: HeroApi, useClass: MockHeroSearchService }],
    });
    service = TestBed.inject(HeroSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
