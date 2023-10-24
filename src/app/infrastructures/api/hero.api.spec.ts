import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Hero } from '../../domain/hero';
import { HeroApi } from './hero.api';

describe('HeroApi', () => {
  let service: HeroApi;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HeroApi);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getHeroes()', () => {
    it('getHeroes()', () => {
      const heroes: Hero[] = [{ id: 1, name: 'test' }];

      service.getHeroes().subscribe((data) => expect(data).toEqual(heroes));
      const req = httpTestingController.expectOne('api/heroes');

      expect(req.request.method).toBe('GET');
      req.flush(heroes);
    });

    // NOTE: https://angular.jp/guide/example-apps-list#testing
    it('404 エラーを返したとき', () => {
      const msg = 'Deliberate 404';

      service.getHeroes().subscribe({
        next: () => fail('expected to fail'),
        error: (error) => {
          expect(error.message).toContain(msg);
        },
      });

      const req = httpTestingController.expectOne('api/heroes');

      req.flush(msg, { status: 404, statusText: 'Not Found' });
    });
  });

  it('getHero()', () => {
    const id = 1;
    const hero: Hero = { id, name: 'test' };

    service.getHero(id).subscribe((data) => expect(data).toEqual(hero));
    const req = httpTestingController.expectOne(`api/heroes/${id}`);

    expect(req.request.method).toBe('GET');
    req.flush(hero);
  });

  it('updateHero()', () => {
    const hero: Hero = { id: 1, name: 'test' };

    service.updateHero(hero).subscribe((data) => expect(data).toEqual(hero));
    const req = httpTestingController.expectOne('api/heroes');

    expect(req.request.method).toBe('PUT');
    req.flush(hero);
  });

  it('addHero()', () => {
    const hero: Hero = { id: 1, name: 'test' };

    service.addHero(hero).subscribe((data) => expect(data).toEqual(hero));
    const req = httpTestingController.expectOne('api/heroes');

    expect(req.request.method).toBe('POST');
    req.flush(hero);
  });

  it('deleteHero()', () => {
    const id = 1;
    const hero: Hero = { id, name: 'test' };

    service.deleteHero(id).subscribe((data) => expect(data).toEqual(hero));
    const req = httpTestingController.expectOne(`api/heroes/${id}`);

    expect(req.request.method).toBe('DELETE');
    req.flush(hero);
  });

  describe('searchHeroes()', () => {
    it('term が空文字のとき、空配列の Observable を返す', () => {
      const term = '';
      service.searchHeroes(term).subscribe((data) => expect(data).toEqual([]));
    });

    it('term が空文字でないとき、空配列の Observable を返す', () => {
      const term = 'test';
      const heroes: Hero[] = [{ id: 1, name: term }];

      service.searchHeroes(term).subscribe((data) => expect(data).toEqual(heroes));
      const req = httpTestingController.expectOne(`api/heroes/?name=${term}`);

      expect(req.request.method).toBe('GET');
      req.flush(heroes);
    });
  });
});
