import { Injectable, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Hero } from '../../../../domain/hero';
import { HeroApi } from '../../../../infrastructures/api/hero.api';

interface DashboardState {
  heroes: Hero[];
}

const initialState: DashboardState = {
  heroes: [],
};

@Injectable()
export class DashboardService {
  private readonly _heroApi = inject(HeroApi);

  readonly $state = signal<DashboardState>(initialState);

  async getHeroes(): Promise<void> {
    const heroes = await firstValueFrom(this._heroApi.getHeroes());
    this.$state.set({ heroes: heroes.slice(1, 5) });
  }
}
