import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Hero } from '../../domain/hero';
import { HeroGateway } from './hero.gateway';

describe('HeroGateway', () => {
  let gateway: HeroGateway;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    gateway = TestBed.inject(HeroGateway);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('getHeroes()', () => {
    const expected: Hero[] = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
    ];

    gateway.getHeroes().subscribe((resp) => {
      expect(resp).toEqual(expected);
    });

    const req = httpTestingController.expectOne('api/heroes');
    expect(req.request.method).toEqual('GET');
    req.flush(expected);
  });

  it('getHero()', () => {
    const expected: Hero = { id: 13, name: 'Bombasto' };
    const targetId = expected.id;

    gateway.getHero(targetId).subscribe((resp) => {
      expect(resp).toEqual(expected);
    });

    const req = httpTestingController.expectOne(`api/heroes/${targetId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(expected);
  });

  it('putHero()', () => {
    const hero: Hero = { id: 13, name: 'Bombasto' };

    gateway.putHero(hero).subscribe((resp) => {
      expect(resp).toEqual({});
    });

    const req = httpTestingController.expectOne('api/heroes');
    expect(req.request.method).toEqual('PUT');
    req.flush({});
  });
});
