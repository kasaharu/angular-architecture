import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { HeroApi } from '../../../../infrastructures/api/hero.api';
import { routes } from '../../../../routes';
import { HeroDetailPageComponent } from './hero-detail.component';

class MockHeroService {}

describe('HeroDetailPageComponent', () => {
  let harness: RouterTestingHarness;
  let component: HeroDetailPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDetailPageComponent],
      providers: [provideRouter(routes), { provide: HeroApi, useClass: MockHeroService }],
    }).compileComponents();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('/detail/1', HeroDetailPageComponent);
    harness.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
