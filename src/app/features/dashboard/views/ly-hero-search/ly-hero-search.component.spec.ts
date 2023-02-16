import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyHeroSearchComponent } from './ly-hero-search.component';

describe('LyHeroSearchComponent', () => {
  let component: LyHeroSearchComponent;
  let fixture: ComponentFixture<LyHeroSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LyHeroSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyHeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
