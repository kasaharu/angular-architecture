import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroApi } from '../../../../infrastructures/api/hero.api';
import HeroesPageComponent from './heroes.component';

class MockHeroService {}

describe('HeroesPageComponent', () => {
  let component: HeroesPageComponent;
  let fixture: ComponentFixture<HeroesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesPageComponent],
      providers: [{ provide: HeroApi, useClass: MockHeroService }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
