import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../../../routes';
import { DashboardComponent } from '../../containers/dashboard/dashboard.component';
import { DashboardPageComponent } from './dashboard.component';

@Component({ selector: 'app-dashboard', standalone: true, template: '' })
class MockDashboardComponent {}

describe('DashboardPageComponent', () => {
  let harness: RouterTestingHarness;
  let component: DashboardPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPageComponent],
      providers: [provideRouter(routes)],
    })
      .overrideComponent(DashboardPageComponent, { remove: { imports: [DashboardComponent] }, add: { imports: [MockDashboardComponent] } })
      .compileComponents();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('', DashboardPageComponent);

    harness.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
