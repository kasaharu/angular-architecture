import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { Hero } from '../../../domain/hero';

export interface HeroDetailState {
  id: number | null;
  hero: Hero | null;
}

@Injectable()
export class HeroDetailStore extends ComponentStore<HeroDetailState> {
  constructor() {
    super({ id: null, hero: null });
  }

  readonly id$: Observable<number | null> = this.select((state) => state.id);
  readonly hero$: Observable<Hero | null> = this.select((state) => state.hero);

  readonly setId = this.updater((state, id: number) => ({ ...state, id }));
  readonly saveHero = this.updater((state, hero: Hero) => ({ ...state, hero }));
}
