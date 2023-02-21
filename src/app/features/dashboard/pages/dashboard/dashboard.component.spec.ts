import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroApi } from '../../../../infrastructures/api/hero.api';
import { DashboardComponent } from '../../containers/dashboard/dashboard.component';
import { DashboardPageComponent } from './dashboard.component';

class MockHeroService {}

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPageComponent, DashboardComponent],
      providers: [{ provide: HeroApi, useClass: MockHeroService }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
