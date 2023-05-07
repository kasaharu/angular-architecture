import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../../../routes';
import { DashboardComponent } from '../../containers/dashboard/dashboard.component';
import { DashboardPageComponent } from './dashboard.component';

@Component({ selector: 'app-dashboard', standalone: true, template: '' })
class MockDashboardComponent {}

describe('DashboardPageComponent', () => {
  let harness: RouterTestingHarness;
  let component: DashboardPageComponent;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPageComponent],
      providers: [provideRouter(routes)],
    })
      .overrideComponent(DashboardPageComponent, { remove: { imports: [DashboardComponent] }, add: { imports: [MockDashboardComponent] } })
      .compileComponents();

    router = TestBed.inject(Router);
    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('', DashboardPageComponent);

    harness.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('/ にアクセスしたときに /dashboard にリダイレクトされること', async () => {
    await harness.navigateByUrl('');
    harness.detectChanges();
    expect(router.url).toBe('/dashboard');
  });
});
