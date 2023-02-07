import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroService } from '../../../../infrastructures/api/hero.service';
import { DashboardComponent } from './dashboard.component';

class MockHeroService {}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [{ provide: HeroService, useClass: MockHeroService }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
