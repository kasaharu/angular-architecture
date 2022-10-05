import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Hero } from '../../../../domain/hero';
import { HeroService } from '../../../../infrastructures/api/hero.service';
import { HeroDetailStore } from './hero-detail.store';

class MockHeroService implements Partial<HeroService> {
  getHero(): any {}
  updateHero(): any {}
}

describe('HeroDetailStore', () => {
  let store: HeroDetailStore;
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroDetailStore, { provide: HeroService, useClass: MockHeroService }],
    });

    store = TestBed.inject(HeroDetailStore);
    service = TestBed.inject(HeroService);
  });

  describe('#getHero()', () => {
    it('hero が取得できること', async () => {
      const id = 1;
      const hero: Hero = { id, name: 'hero name' };

      spyOn(service, 'getHero').and.returnValue(of(hero));

      await store.getHero(id);

      store.hero$.subscribe((value) => {
        expect(value).toEqual(hero);
      });
    });
  });

  describe('#updateHero()', () => {
    it('更新された hero が取得できること', async () => {
      const id = 1;
      const hero: Hero = { id, name: 'hero name' };
      store.setState({ hero });
      const updatedHero: Hero = { id, name: 'hero name' };

      spyOn(service, 'updateHero').and.returnValue(of(updatedHero));

      await store.updateHero(updatedHero);

      store.hero$.subscribe((value) => {
        expect(value).toEqual(updatedHero);
      });
    });
  });
});
