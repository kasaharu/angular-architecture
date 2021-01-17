import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/domain/hero';
import { HeroGateway } from '../../../../infrastructures/gateways/hero.gateway';
import { HeroesPageComponent } from './heroes.component';

class MockHeroService implements Partial<HeroGateway> {
  getHeroes(): Observable<Hero[]> {
    return of([{ id: 1, name: 'Dr Nice' }]);
  }
}

describe('HeroesPageComponent', () => {
  let component: HeroesPageComponent;
  let fixture: ComponentFixture<HeroesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroesPageComponent],
      providers: [{ provide: HeroGateway, useClass: MockHeroService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
