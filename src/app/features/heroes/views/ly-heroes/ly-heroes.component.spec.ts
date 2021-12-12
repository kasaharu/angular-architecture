import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyHeroesComponent } from './ly-heroes.component';

describe('LyHeroesComponent', () => {
  let component: LyHeroesComponent;
  let fixture: ComponentFixture<LyHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
