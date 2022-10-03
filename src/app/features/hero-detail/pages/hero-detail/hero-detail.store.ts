import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Hero } from '../../../../domain/hero';

interface HeroDetailState {
  hero: Hero | null;
}

@Injectable()
export class HeroDetailStore extends ComponentStore<HeroDetailState> {
  constructor() {
    super({ hero: null });
  }

  readonly hero$ = this.select((state) => state.hero);
  readonly setHero = this.updater((state, hero: Hero) => ({ ...state, hero }));
}
