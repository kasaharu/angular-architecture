import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeroGateway } from 'src/app/data-access/gateways/hero.gateway';
import { Hero } from 'src/app/domain/hero';
import { HeroDetailUsecase } from './hero-detail.usecase';

class MockHeroGateway implements Partial<HeroGateway> {
  getHero(): any {}
  putHero(): any {}
}

describe('HeroDetailUsecase', () => {
  let usecase: HeroDetailUsecase;
  let gateway: HeroGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroDetailUsecase, { provide: HeroGateway, useClass: MockHeroGateway }],
    });

    usecase = TestBed.inject(HeroDetailUsecase);
    gateway = TestBed.inject(HeroGateway);
  });

  describe('setHeroId()', () => {
    it('usecase.setId が呼ばれる', () => {
      const id = 100;
      spyOn(usecase, 'setId');
      usecase.setHeroId(id);

      expect(usecase.setId).toHaveBeenCalledWith(id);
    });

    it('usecase の id が更新される', () => {
      const id = 100;
      const initialState = { id: null, hero: null };
      usecase.setState(initialState);

      usecase.setHeroId(id);

      usecase.state$.subscribe((state) => {
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

    it('usecase.saveHero が呼ばれる', async () => {
      spyOn(usecase, 'saveHero');

      await usecase.fetchHero(id);

      expect(usecase.saveHero).toHaveBeenCalledWith(hero);
    });

    it('usecase の hero が更新される', async () => {
      const id = 100;
      const hero: Hero = { id, name: 'hero' };

      const initialState = { id: null, hero: null };
      usecase.setState(initialState);

      await usecase.fetchHero(id);

      usecase.state$.subscribe((state) => {
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

    it('usecase.saveHero が呼ばれる', async () => {
      spyOn(usecase, 'saveHero');

      await usecase.updateHero(hero);

      expect(usecase.saveHero).toHaveBeenCalledWith(hero);
    });

    it('usecase の hero が更新される', async () => {
      const initialState = { id: null, hero: null };
      usecase.setState(initialState);

      await usecase.updateHero(hero);

      usecase.state$.subscribe((state) => {
        expect(state).toEqual({ ...initialState, hero });
      });
    });
  });
});
