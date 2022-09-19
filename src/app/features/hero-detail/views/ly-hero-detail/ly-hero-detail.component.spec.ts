import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyHeroDetailComponent } from './ly-hero-detail.component';

describe('LyHeroDetailComponent', () => {
  let component: LyHeroDetailComponent;
  let fixture: ComponentFixture<LyHeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyHeroDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LyHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
