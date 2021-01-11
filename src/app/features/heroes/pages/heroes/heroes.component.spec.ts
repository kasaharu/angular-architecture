import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/domain/hero';
import { HeroService } from '../../../../infrastructures/gateways/hero.service';
import { HeroesComponent } from './heroes.component';

class MockHeroService implements HeroService {
  getHeroes(): Observable<Hero[]> {
    return of([{ id: 1, name: 'Dr Nice' }]);
  }
}

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [{ provide: HeroService, useClass: MockHeroService }],
      schemas: [NO_ERRORS_SCHEMA],
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
      const targetHero: Hero = { id: 1, name: 'Dr Nice' };
      component.onSelect(targetHero);
      expect(component.selectedHero?.name).toBe('Dr Nice');
    });
  });
});
