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
}
