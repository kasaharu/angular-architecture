import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContentsComponent } from './dashboard-contents.component';

describe('DashboardContentsComponent', () => {
  let component: DashboardContentsComponent;
  let fixture: ComponentFixture<DashboardContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
