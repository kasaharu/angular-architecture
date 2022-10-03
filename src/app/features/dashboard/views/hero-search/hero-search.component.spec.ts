import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroService } from '../../../../infrastructures/api/hero.service';
import { HeroSearchComponent } from './hero-search.component';

class MockHeroService {}

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSearchComponent],
      providers: [{ provide: HeroService, useClass: MockHeroService }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
