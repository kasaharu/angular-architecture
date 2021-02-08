import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesStore } from '../../applications/heroes.store';
import { HeroesUsecase } from '../../applications/heroes.usecase';
import { HeroesComponent } from './heroes.component';

class MockHeroesUsecase implements Partial<HeroesUsecase> {
  fetchHeroes(): any {}
  createHero(): any {}
}

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let usecase: HeroesUsecase;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesComponent],
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
});
