import { TestBed } from '@angular/core/testing';
import { HeroApi } from '../../../../infrastructures/api/hero.api';
import { DashboardStore } from './dashboard.store';

class MockHeroService implements Partial<HeroApi> {
  getHeroes(): any {}
}

describe('DashboardStore', () => {
  let store: DashboardStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardStore, { provide: HeroApi, useClass: MockHeroService }],
    });

    store = TestBed.inject(DashboardStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });
});
