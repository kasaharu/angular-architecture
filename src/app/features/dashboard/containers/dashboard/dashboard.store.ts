import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Hero } from '../../../../domain/hero';

interface DashboardState {
  heroes: Hero[];
}

@Injectable()
export class DashboardStore extends ComponentStore<DashboardState> {
  constructor() {
    super({ heroes: [] });
  }

  readonly heroes$ = this.select((state) => state.heroes.slice(1, 5));
  readonly setHeroes = this.updater((state, heroes: Hero[]) => ({ ...state, heroes }));
}
