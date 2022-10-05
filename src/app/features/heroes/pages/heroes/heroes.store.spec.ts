import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Hero } from '../../../../domain/hero';
import { HeroService } from '../../../../infrastructures/api/hero.service';
import { HeroesStore } from './heroes.store';

class MockHeroService implements Partial<HeroService> {
  getHeroes(): any {}
  addHero(): any {}
  deleteHero(): any {}
}

describe('HeroesStore', () => {
  let store: HeroesStore;
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesStore, { provide: HeroService, useClass: MockHeroService }],
    });

    store = TestBed.inject(HeroesStore);
    service = TestBed.inject(HeroService);
  });

  describe('#getHeroes()', () => {
    it('hero 配列が取得できること', async () => {
      const heroes: Hero[] = [{ id: 1, name: 'hero name' }];

      spyOn(service, 'getHeroes').and.returnValue(of(heroes));

      await store.getHeroes();

      store.heroes$.subscribe((value) => {
        expect(value).toEqual(heroes);
      });
    });
  });

  describe('#addHero()', () => {
    beforeEach(() => {
      const defaultHeroes: Hero[] = [{ id: 1, name: 'hero name' }];
      store.setState({ heroes: defaultHeroes });
    });

    it('引数に空文字列を渡した場合、デフォルトの hero 配列が返ること', async () => {
      const newHeroName = '';
      const addedHero: Hero = { id: 100, name: newHeroName };
      const expected: Hero[] = [{ id: 1, name: 'hero name' }];

      spyOn(service, 'addHero').and.returnValue(of(addedHero));

      await store.addHero(newHeroName);

      store.heroes$.subscribe((value) => {
        expect(value).toEqual(expected);
      });
    });

    it('引数に空でない文字列が渡された場合、新しい hero が追加された hero 配列が返ること', async () => {
      const newHeroName = 'new hero';
      const addedHero: Hero = { id: 100, name: newHeroName };
      const expected: Hero[] = [{ id: 1, name: 'hero name' }, addedHero];

      spyOn(service, 'addHero').and.returnValue(of(addedHero));

      await store.addHero(newHeroName);

      store.heroes$.subscribe((value) => {
        expect(value).toEqual(expected);
      });
    });
  });

  describe('#deleteHero()', () => {
    it('空になった hero 配列が取得できること', async () => {
      const hero: Hero = { id: 1, name: 'hero name' };
      const heroes: Hero[] = [hero];
      store.setState({ heroes });

      spyOn(service, 'deleteHero').and.returnValue(of(hero));

      await store.deleteHero(hero);

      store.heroes$.subscribe((value) => {
        expect(value).toEqual([]);
      });
    });
  });
});
