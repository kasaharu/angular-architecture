import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Hero } from '../../../../domain/hero';

export interface HeroesState {
  heroes: Hero[];
  selectedHero: Hero | null;
}

@Injectable()
export class HeroesStore extends ComponentStore<HeroesState> {
  constructor() {
    super({ heroes: [], selectedHero: null });
  }

  readonly heroes$ = this.select((state) => state.heroes);
  readonly selectedHero$ = this.select((state) => state.selectedHero);

  readonly setHeroes = this.updater((state, heroes: Hero[]) => ({ ...state, heroes }));
  readonly setSelectedHero = this.updater((state, hero: Hero) => ({ ...state, selectedHero: hero }));
}
