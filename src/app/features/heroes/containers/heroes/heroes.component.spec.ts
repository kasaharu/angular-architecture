import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from '../../../../domain/hero';
import { HeroesStore } from '../../applications/heroes.store';
import { HeroesUsecase } from '../../applications/heroes.usecase';
import { HeroesComponent } from './heroes.component';

class MockHeroesUsecase implements Partial<HeroesUsecase> {
  fetchHeroes(): any {}
  createHero(): any {}
  deleteHero(): any {}
}

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let usecase: HeroesUsecase;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .overrideComponent(HeroesComponent, {
        add: { providers: [HeroesStore, { provide: HeroesUsecase, useClass: MockHeroesUsecase }] },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    usecase = fixture.debugElement.injector.get(HeroesUsecase);
  });

  describe('ngOnInit', () => {
    it('component が作成されたこと', () => {
      expect(component).toBeTruthy();
    });

    it('component が作成されたときに usecase の fetchHeroes が呼ばれること', () => {
      spyOn(usecase, 'fetchHeroes');
      fixture.detectChanges();

      expect(usecase.fetchHeroes).toHaveBeenCalled();
    });
  });

  describe('add', () => {
    it('usecase の createHero が呼ばれること', () => {
      const heroName = 'New hero';
      spyOn(usecase, 'createHero');

      component.add(heroName);

      expect(usecase.createHero).toHaveBeenCalledWith(heroName);
    });
  });

  describe('delete', () => {
    it('usecase の deleteHero が呼ばれること', () => {
      const hero: Hero = { id: 1, name: 'hero' };
      spyOn(usecase, 'deleteHero');

      component.delete(hero);

      expect(usecase.deleteHero).toHaveBeenCalledWith(hero);
    });
  });
});
