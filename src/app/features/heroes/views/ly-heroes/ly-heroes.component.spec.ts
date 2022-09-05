import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyHeroesComponent } from './ly-heroes.component';

describe('LyHeroesComponent', () => {
  let component: LyHeroesComponent;
  let fixture: ComponentFixture<LyHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyHeroesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LyHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
