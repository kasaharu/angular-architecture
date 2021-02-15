import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { Hero } from '../../../domain/hero';

export interface HeroesState {
  heroes: Hero[] | null;
}

@Injectable()
export class HeroesStore extends ComponentStore<HeroesState> {
  constructor() {
    super({ heroes: null });
  }

  readonly heroes$: Observable<Hero[] | null> = this.select((state) => state.heroes);
  readonly saveHeroes = this.updater((_, heroes: Hero[]) => ({ heroes }));
  readonly addHero = this.updater((state, hero: Hero) => {
    return state.heroes === null ? { heroes: [hero] } : { heroes: [...state.heroes, hero] };
  });
  readonly deleteHero = this.updater((state, hero: Hero) => {
    return { heroes: state.heroes === null ? null : state.heroes.filter((h) => h.id !== hero.id) };
  });
}
