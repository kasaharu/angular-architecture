import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Hero } from '../../../../domain/hero';
import { HeroGateway } from '../../../../infrastructures/gateways/hero.gateway';
import { DashboardStore } from './dashboard.store';
import { DashboardUsecase } from './dashboard.usecase';

class MockHeroGateway implements Partial<HeroGateway> {
  getHeroes(): any {}
}

describe('DashboardUsecase', () => {
  let usecase: DashboardUsecase;
  let componentStore: DashboardStore;
  let gateway: HeroGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardUsecase, DashboardStore, { provide: HeroGateway, useClass: MockHeroGateway }],
    });

    usecase = TestBed.inject(DashboardUsecase);
    componentStore = TestBed.inject(DashboardStore);
    gateway = TestBed.inject(HeroGateway);
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
