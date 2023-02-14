import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { firstValueFrom } from 'rxjs';
import { Hero } from '../../../../domain/hero';
import { HeroService } from '../../../../infrastructures/api/hero.service';

interface DashboardState {
  heroes: Hero[];
}

@Injectable()
export class DashboardStore extends ComponentStore<DashboardState> {
  constructor(private readonly _heroService: HeroService) {
    super({ heroes: [] });
  }

  readonly heroes$ = this.select((state) => state.heroes.slice(1, 5));
  readonly setHeroes = this.updater((state, heroes: Hero[]) => ({ ...state, heroes }));

  async getHeroes(): Promise<void> {
    const heroes = await firstValueFrom(this._heroService.getHeroes());
    this.setHeroes(heroes);
  }
}
