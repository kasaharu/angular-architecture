import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { HeroApi } from '../../../../infrastructures/api/hero.api';
import { DashboardComponent } from '../../containers/dashboard/dashboard.component';
import DASHBOARD_ROUTES from '../../routes';
import { DashboardPageComponent } from './dashboard.component';

class MockHeroService {}

describe('DashboardPageComponent', () => {
  let harness: RouterTestingHarness;
  let component: DashboardPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPageComponent, DashboardComponent],
      providers: [provideRouter(DASHBOARD_ROUTES), { provide: HeroApi, useClass: MockHeroService }],
    }).compileComponents();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('', DashboardPageComponent);

    harness.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
