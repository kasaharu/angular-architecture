import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroService } from '../../../../infrastructures/api/hero.service';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { LyDashboardComponent } from './ly-dashboard.component';

class MockHeroService {}

describe('LyDashboardComponent', () => {
  let component: LyDashboardComponent;
  let fixture: ComponentFixture<LyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyDashboardComponent, HeroSearchComponent],
      providers: [{ provide: HeroService, useClass: MockHeroService }],
    }).compileComponents();

    fixture = TestBed.createComponent(LyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
