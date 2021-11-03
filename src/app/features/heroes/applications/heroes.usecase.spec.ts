import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeroGateway } from '../../../data-access/gateways/hero.gateway';
import { Hero } from '../../../domain/hero';
import { HeroesUsecase } from './heroes.usecase';

class MockHeroGateway implements Partial<HeroGateway> {
  getHeroes(): any {}
  postHero(): any {}
  deleteHero(): any {}
}

describe('HeroesUsecase', () => {
  let usecase: HeroesUsecase;
  let gateway: HeroGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesUsecase, { provide: HeroGateway, useClass: MockHeroGateway }],
    });

    usecase = TestBed.inject(HeroesUsecase);
    gateway = TestBed.inject(HeroGateway);
  });

  describe('fetchHeroes', () => {
    it('メソッドを呼んだときに usecase.saveHeroes() が実行されること', async () => {
      const heroes: Hero[] = [{ id: 1, name: 'hero name' }];
      spyOn(gateway, 'getHeroes').and.returnValue(of(heroes));
      spyOn(usecase, 'saveHeroes');

      await usecase.fetchHeroes();

      expect(usecase.saveHeroes).toHaveBeenCalledWith(heroes);
    });

    it('メソッドを呼んだときに usecase の state に heroes がセットされること', async () => {
      const heroes: Hero[] = [{ id: 1, name: 'hero name' }];
      spyOn(gateway, 'getHeroes').and.returnValue(of(heroes));

      await usecase.fetchHeroes();

      usecase
        .select((state) => state.heroes)
        .subscribe((h) => {
          expect(h).toEqual(heroes);
        });
    });
  });

  describe('createHero', () => {
    it('メソッドを呼んだときに gateway.postHero() が実行されること', async () => {
      const heroName = 'new hero name';
      const returnValueHero: Hero = { id: 10, name: heroName };
      spyOn(gateway, 'postHero').and.returnValue(of(returnValueHero));

      await usecase.createHero(heroName);

      expect(gateway.postHero).toHaveBeenCalledWith({ name: heroName } as Hero);
    });

    describe('メソッドを呼んだときに usecase の state が更新されること', () => {
      it('state.heroes が空の場合 hero がセットされること', async () => {
        const heroName = 'new hero name';
        const returnValueHero: Hero = { id: 10, name: heroName };
        spyOn(gateway, 'postHero').and.returnValue(of(returnValueHero));

        await usecase.createHero(heroName);

        usecase
          .select((state) => state.heroes)
          .subscribe((h) => {
            expect(h).toEqual([returnValueHero]);
          });
      });

      it('state.heroes が空でない場合 hero が追加されること', async () => {
        const heroName = 'new hero name';
        const returnValueHero: Hero = { id: 10, name: heroName };
        const heroes: Hero[] = [{ id: 2, name: 'hero 2 name' }];
        const expected: Hero[] = [
          { id: 2, name: 'hero 2 name' },
          { id: 10, name: 'new hero name' },
        ];
        spyOn(gateway, 'postHero').and.returnValue(of(returnValueHero));
        usecase.setState({ heroes });

        await usecase.createHero(heroName);

        usecase
          .select((state) => state.heroes)
          .subscribe((h) => {
            expect(h).toEqual(expected);
          });
      });
    });
  });

  describe('deleteHero', () => {
    it('メソッドを呼んだときに gateway.deleteHero() が実行されること', async () => {
      const hero: Hero = { id: 1, name: 'one' };
      spyOn(gateway, 'deleteHero').and.returnValue(of());

      await usecase.deleteHero(hero);

      expect(gateway.deleteHero).toHaveBeenCalledWith(hero);
    });

    it('メソッドを呼んだときに usecase の state から対象の hero が削除されること', async () => {
      const hero: Hero = { id: 2, name: 'two' };
      const heroes: Hero[] = [
        { id: 1, name: 'one' },
        { id: 2, name: 'two' },
        { id: 3, name: 'three' },
      ];
      spyOn(gateway, 'deleteHero').and.returnValue(of());
      usecase.setState({ heroes });

      await usecase.deleteHero(hero);

      usecase
        .select((state) => state.heroes)
        .subscribe((h) => {
          expect(h).toEqual([
            { id: 1, name: 'one' },
            { id: 3, name: 'three' },
          ]);
        });
    });
  });
});
