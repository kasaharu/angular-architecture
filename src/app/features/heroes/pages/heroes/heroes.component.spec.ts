import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSelect()', () => {
    it('heroes の 1 番目の hero を選択すると selectedHero の名前が Dr Nice になる', () => {
      component.onSelect(component.heroes[0]);
      expect(component.selectedHero?.name).toBe('Dr Nice');
    });
  });
});
