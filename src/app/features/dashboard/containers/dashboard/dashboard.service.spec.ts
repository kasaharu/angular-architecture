import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { Hero } from '../../../../domain/hero';
import { HeroApi } from '../../../../infrastructures/api/hero.api';
import { DashboardService } from './dashboard.service';

class MockHeroApi {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getHeroes() {}
}

describe('DashboardService', () => {
  let service: DashboardService;
  let api: HeroApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardService, { provide: HeroApi, useClass: MockHeroApi }],
    });
    service = TestBed.inject(DashboardService);
    api = TestBed.inject(HeroApi);
  });

  describe('#getHeroes()', () => {
    it('length 6 の hero 配列が返ってきた場合、index 1 ~ 4 までの配列が得られること', async () => {
      const heroes: Hero[] = [
        { id: 1, name: 'hero name' },
        { id: 2, name: 'hero name2' },
        { id: 3, name: 'hero name3' },
        { id: 4, name: 'hero name4' },
        { id: 5, name: 'hero name5' },
        { id: 6, name: 'hero name6' },
      ];
      const expected: Hero[] = [
        { id: 2, name: 'hero name2' },
        { id: 3, name: 'hero name3' },
        { id: 4, name: 'hero name4' },
        { id: 5, name: 'hero name5' },
      ];

      spyOn(api, 'getHeroes').and.returnValue(of(heroes));

      await service.getHeroes();

      expect(service.$state().heroes).toEqual(expected);
    });
  });
});
