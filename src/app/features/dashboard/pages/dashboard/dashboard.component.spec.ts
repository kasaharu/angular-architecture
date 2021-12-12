import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroGateway } from '../../../../data-access/gateways/hero.gateway';
import { Hero } from '../../../../domain/hero';
import { DashboardComponent } from './dashboard.component';
import { DashboardUsecase } from './dashboard.usecase';

class MockHeroGateway implements Partial<HeroGateway> {
  getHeroes(): any {}
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let usecase: DashboardUsecase;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [{ provide: HeroGateway, useClass: MockHeroGateway }],
    })
      .overrideComponent(DashboardComponent, {
        add: { providers: [DashboardUsecase] },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    usecase = fixture.debugElement.injector.get(DashboardUsecase);
    usecase.setState({ heroes: null });
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

  describe('usecase の componentStore に heroes がセットされている場合', () => {
    it('6 人の hero がセットされる場合 4 人の hero が component.heroes にセットされる', () => {
      const heroes: Hero[] = [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
      ];
      const expected: Hero[] = [
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
      ];
      usecase.setState({ heroes });

      component.heroes$.subscribe((state) => {
        expect(state).toEqual(expected);
      });
    });
  });
});
