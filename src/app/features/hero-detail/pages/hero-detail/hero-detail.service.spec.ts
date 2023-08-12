import { TestBed } from '@angular/core/testing';
import { HeroApi } from '../../../../infrastructures/api/hero.api';
import { HeroDetailService } from './hero-detail.service';

class MockHeroApi implements Partial<HeroApi> {}

describe('HeroDetailService', () => {
  let service: HeroDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroDetailService, { provide: HeroApi, useClass: MockHeroApi }],
    });
    service = TestBed.inject(HeroDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
