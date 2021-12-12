import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeroGateway } from '../../../../data-access/gateways/hero.gateway';
import { Hero } from '../../../../domain/hero';
import { DashboardUsecase } from './dashboard.usecase';

class MockHeroGateway implements Partial<HeroGateway> {
  getHeroes(): any {}
}

describe('DashboardUsecase', () => {
  let usecase: DashboardUsecase;
  let gateway: HeroGateway;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardUsecase, { provide: HeroGateway, useClass: MockHeroGateway }],
    });

    usecase = TestBed.inject(DashboardUsecase);
    gateway = TestBed.inject(HeroGateway);
  });

  describe('fetchHeroes', () => {
    it('メソッドを呼んだときに componentStore.saveHeroes() が実行されること', async () => {
      const heroes: Hero[] = [{ id: 1, name: 'hero name' }];
      spyOn(gateway, 'getHeroes').and.returnValue(of(heroes));
      spyOn(usecase, 'saveHeroes');

      await usecase.fetchHeroes();

      expect(usecase.saveHeroes).toHaveBeenCalledWith(heroes);
    });

    it('メソッドを呼んだときに componentStore の state に heroes がセットされること', async () => {
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
});
