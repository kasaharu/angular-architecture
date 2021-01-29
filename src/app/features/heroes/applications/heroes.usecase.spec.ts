import { TestBed } from '@angular/core/testing';
import { HeroGateway } from '../../../infrastructures/gateways/hero.gateway';
import { HeroesStore } from './heroes.store';
import { HeroesUsecase } from './heroes.usecase';

class MockHeroGateway implements Partial<HeroGateway> {}

describe('HeroesUsecase', () => {
  let usecase: HeroesUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesUsecase, HeroesStore, { provide: HeroGateway, useClass: MockHeroGateway }],
    });
    usecase = TestBed.inject(HeroesUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
