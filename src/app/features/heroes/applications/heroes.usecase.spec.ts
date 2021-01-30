import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Hero } from '../../../domain/hero';
import { HeroGateway } from '../../../infrastructures/gateways/hero.gateway';
import { HeroesStore } from './heroes.store';
import { HeroesUsecase } from './heroes.usecase';

class MockHeroGateway implements Partial<HeroGateway> {
  getHeroes(): any {}
}

describe('HeroesUsecase', () => {
  let usecase: HeroesUsecase;
  let gateway: HeroGateway;
  let componentStore: HeroesStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesUsecase, HeroesStore, { provide: HeroGateway, useClass: MockHeroGateway }],
    });

    usecase = TestBed.inject(HeroesUsecase);
    gateway = TestBed.inject(HeroGateway);
    componentStore = TestBed.inject(HeroesStore);
  });

  describe('fetchHeroes', () => {
    it('メソッドを呼んだときに componentStore.saveHeroes() が実行されること', async () => {
      const heroes: Hero[] = [{ id: 1, name: 'hero name' }];
      spyOn(gateway, 'getHeroes').and.returnValue(of(heroes));
      spyOn(componentStore, 'saveHeroes');

      await usecase.fetchHeroes();

      expect(componentStore.saveHeroes).toHaveBeenCalledWith(heroes);
    });

    it('メソッドを呼んだときに componentStore の state に heroes がセットされること', async () => {
      const heroes: Hero[] = [{ id: 1, name: 'hero name' }];
      spyOn(gateway, 'getHeroes').and.returnValue(of(heroes));

      await usecase.fetchHeroes();

      componentStore
        .select((state) => state.heroes)
        .subscribe((h) => {
          expect(h).toEqual(heroes);
        });
    });
  });
});
