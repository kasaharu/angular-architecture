import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInfoComponent } from './hero-info.component';

describe('HeroInfoComponent', () => {
  let component: HeroInfoComponent;
  let fixture: ComponentFixture<HeroInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
