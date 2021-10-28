import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyDashboardComponent } from './ly-dashboard.component';

describe('LyDashboardComponent', () => {
  let component: LyDashboardComponent;
  let fixture: ComponentFixture<LyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
