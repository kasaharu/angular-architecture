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

  it('postHero()', () => {
    const hero: Hero = { id: 100, name: 'new Hero' };

    gateway.postHero(hero).subscribe((resp) => {
      expect(resp).toEqual(hero);
    });

    const req = httpTestingController.expectOne('api/heroes');
    expect(req.request.method).toEqual('POST');
    req.flush(hero);
  });

  describe('deleteHero()', () => {
    it('id のみ渡した場合に指定した URL にリクエストされること', () => {
      const heroId = 100;
      const expected: Hero = { id: heroId, name: 'new Hero' };

      gateway.deleteHero(heroId).subscribe((resp) => {
        expect(resp).toEqual(expected);
      });

      const req = httpTestingController.expectOne(`api/heroes/${heroId}`);
      expect(req.request.method).toEqual('DELETE');
      req.flush(expected);
    });

    it('Hero 型で渡した場合に指定した URL にリクエストされること', () => {
      const hero: Hero = { id: 100, name: 'new Hero' };

      gateway.deleteHero(hero).subscribe((resp) => {
        expect(resp).toEqual(hero);
      });

      const req = httpTestingController.expectOne(`api/heroes/${hero.id}`);
      expect(req.request.method).toEqual('DELETE');
      req.flush(hero);
    });
  });
});
