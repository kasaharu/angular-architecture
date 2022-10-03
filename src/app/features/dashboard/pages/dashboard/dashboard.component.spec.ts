import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroService } from '../../../../infrastructures/api/hero.service';
import { DashboardPageComponent } from './dashboard.component';

class MockHeroService {}

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPageComponent],
      providers: [{ provide: HeroService, useClass: MockHeroService }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
