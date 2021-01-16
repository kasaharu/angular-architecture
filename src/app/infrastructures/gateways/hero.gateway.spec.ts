import { TestBed } from '@angular/core/testing';

import { HeroGateway } from './hero.gateway';

describe('HeroGateway', () => {
  let gateway: HeroGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    gateway = TestBed.inject(HeroGateway);
  });

  it('should be created', () => {
    expect(gateway).toBeTruthy();
  });
});
