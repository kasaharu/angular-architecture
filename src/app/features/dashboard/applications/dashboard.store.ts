import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { Hero } from '../../../domain/hero';

export interface DashboardState {
  heroes: Hero[] | null;
}

@Injectable()
export class DashboardStore extends ComponentStore<DashboardState> {
  constructor() {
    super({ heroes: null });
  }

  readonly heroes$: Observable<Hero[] | null> = this.select((state) => (state.heroes ? state.heroes.slice(1, 5) : null));
  readonly saveHeroes = this.updater((_, heroes: Hero[]) => ({ heroes }));
}
