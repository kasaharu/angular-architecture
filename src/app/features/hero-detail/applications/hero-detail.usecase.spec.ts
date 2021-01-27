import { TestBed } from '@angular/core/testing';
import { HeroGateway } from 'src/app/infrastructures/gateways/hero.gateway';
import { HeroDetailStore } from './hero-detail.store';
import { HeroDetailUsecase } from './hero-detail.usecase';

class MockHeroGateway implements Partial<HeroGateway> {}

describe('HeroDetailUsecase', () => {
  let usecase: HeroDetailUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroDetailStore, HeroDetailUsecase, { provide: HeroGateway, useClass: MockHeroGateway }],
    });
    usecase = TestBed.inject(HeroDetailUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
