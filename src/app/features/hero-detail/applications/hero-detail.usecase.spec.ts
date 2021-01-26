import { TestBed } from '@angular/core/testing';

import { HeroDetailUsecase } from './hero-detail.usecase';

describe('HeroDetailUsecase', () => {
  let usecase: HeroDetailUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    usecase = TestBed.inject(HeroDetailUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});
