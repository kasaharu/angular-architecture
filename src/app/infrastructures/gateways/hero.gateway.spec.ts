import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HeroGateway } from './hero.gateway';

describe('HeroGateway', () => {
  let gateway: HeroGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    gateway = TestBed.inject(HeroGateway);
  });

  it('should be created', () => {
    expect(gateway).toBeTruthy();
  });
});
