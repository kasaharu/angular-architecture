import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Hero } from 'src/app/domain/hero';
import { HeroGateway } from 'src/app/infrastructures/gateways/hero.gateway';
import { HeroDetailStore } from './hero-detail.store';
import { HeroDetailUsecase } from './hero-detail.usecase';

class MockHeroGateway implements Partial<HeroGateway> {
  getHero(): any {}
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
    it('componentStore.saveHero が呼ばれる', async () => {
      const id = 100;
      const expected: Hero = { id, name: 'hero' };

      spyOn(componentStore, 'saveHero');
      spyOn(gateway, 'getHero').and.returnValue(of(expected));

      await usecase.fetchHero(id);

      expect(componentStore.saveHero).toHaveBeenCalledWith(expected);
    });

    it('componentStore の hero が更新される', async () => {
      const id = 100;
      const hero: Hero = { id, name: 'hero' };
      spyOn(gateway, 'getHero').and.returnValue(of(hero));

      const initialState = { id: null, hero: null };
      componentStore.setState(initialState);

      await usecase.fetchHero(id);

      componentStore.state$.subscribe((state) => {
        expect(state).toEqual({ ...initialState, hero });
      });
    });
  });
});
