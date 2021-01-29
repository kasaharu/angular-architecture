import { TestBed } from '@angular/core/testing';
import { HeroesUsecase } from './heroes.usecase';

describe('HeroesUsecase', () => {
  let usecase: HeroesUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    usecase = TestBed.inject(HeroesUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
