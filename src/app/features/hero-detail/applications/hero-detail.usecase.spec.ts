import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Hero } from 'src/app/domain/hero';
import { HeroGateway } from 'src/app/data-access/gateways/hero.gateway';
import { HeroDetailStore } from './hero-detail.store';
import { HeroDetailUsecase } from './hero-detail.usecase';

class MockHeroGateway implements Partial<HeroGateway> {
  getHero(): any {}
  putHero(): any {}
}

describe('HeroDetailUsecase', () => {
  let usecase: HeroDetailUsecase;
  let componentStore: HeroDetailStore;
  let gateway: HeroGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroDetailStore, HeroDetailUsecase, { provide: HeroGateway, useClass: MockHeroGateway }],
    });

    usecase = TestBed.inject(HeroDetailUsecase);
    componentStore = TestBed.inject(HeroDetailStore);
    gateway = TestBed.inject(HeroGateway);
  });

  describe('setHeroId()', () => {
    it('componentStore.setId が呼ばれる', () => {
      const id = 100;
      spyOn(componentStore, 'setId');
      usecase.setHeroId(id);

      expect(componentStore.setId).toHaveBeenCalledWith(id);
    });

    it('componentStore の id が更新される', () => {
      const id = 100;
      const initialState = { id: null, hero: null };
      componentStore.setState(initialState);

      usecase.setHeroId(id);

      componentStore.state$.subscribe((state) => {
        expect(state).toEqual({ ...initialState, id });
      });
    });
  });

  describe('fetchHero()', () => {
    let id: number;
    let hero: Hero;
    beforeEach(() => {
      id = 100;
      hero = { id, name: 'hero' };
      spyOn(gateway, 'getHero').and.returnValue(of(hero));
    });

    it('componentStore.saveHero が呼ばれる', async () => {
      spyOn(componentStore, 'saveHero');

      await usecase.fetchHero(id);

      expect(componentStore.saveHero).toHaveBeenCalledWith(hero);
    });

    it('componentStore の hero が更新される', async () => {
      const id = 100;
      const hero: Hero = { id, name: 'hero' };

      const initialState = { id: null, hero: null };
      componentStore.setState(initialState);

      await usecase.fetchHero(id);

      componentStore.state$.subscribe((state) => {
        expect(state).toEqual({ ...initialState, hero });
      });
    });
  });

  describe('updateHero()', () => {
    let hero: Hero;
    beforeEach(() => {
      hero = { id: 100, name: 'hero' };
      spyOn(gateway, 'putHero').and.returnValue(of());
    });

    it('componentStore.saveHero が呼ばれる', async () => {
      spyOn(componentStore, 'saveHero');

      await usecase.updateHero(hero);

      expect(componentStore.saveHero).toHaveBeenCalledWith(hero);
    });

    it('componentStore の hero が更新される', async () => {
      const initialState = { id: null, hero: null };
      componentStore.setState(initialState);

      await usecase.updateHero(hero);

      componentStore.state$.subscribe((state) => {
        expect(state).toEqual({ ...initialState, hero });
      });
    });
  });
});
