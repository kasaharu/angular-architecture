import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from '../../../../domain/hero';
import { DashboardComponent } from './dashboard.component';
import { DashboardStore } from '../../applications/dashboard.store';
import { DashboardUsecase } from '../../applications/dashboard.usecase';

class MockDashboardUsecase implements Partial<DashboardUsecase> {
  fetchHeroes(): any {}
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let usecase: DashboardUsecase;
  let componentStore: DashboardStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
    })
      .overrideComponent(DashboardComponent, {
        add: { providers: [DashboardStore, { provide: DashboardUsecase, useClass: MockDashboardUsecase }] },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    usecase = fixture.debugElement.injector.get(DashboardUsecase);
    componentStore = fixture.debugElement.injector.get(DashboardStore);
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

  describe('componentStore に heroes がセットされている場合', () => {
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
      componentStore.setState({ heroes });

      component.heroes$.subscribe((state) => {
        expect(state).toEqual(expected);
      });
    });
  });
});
