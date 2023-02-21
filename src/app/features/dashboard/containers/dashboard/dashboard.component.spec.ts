import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroApi } from '../../../../infrastructures/api/hero.api';
import { DashboardComponent } from './dashboard.component';

class MockHeroService {}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [{ provide: HeroApi, useClass: MockHeroService }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
