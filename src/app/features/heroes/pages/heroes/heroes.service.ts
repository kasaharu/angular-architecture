import { Injectable, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Hero } from '../../../../domain/hero';
import { HeroApi } from '../../../../infrastructures/api/hero.api';

interface HeroesState {
  heroes: Hero[];
}

const initialState: HeroesState = {
  heroes: [],
};

@Injectable()
export class HeroesService {
  private readonly _heroService = inject(HeroApi);

  readonly $state = signal<HeroesState>(initialState);

  async getHeroes(): Promise<void> {
    const heroes = await firstValueFrom(this._heroService.getHeroes());
    this.$state.set({ ...this.$state(), heroes });
  }

  async addHero(name: string): Promise<void> {
    name = name.trim();
    if (!name) {
      return;
    }

    const hero = await firstValueFrom(this._heroService.addHero({ name } as Hero));
    this.$state.set({ ...this.$state(), heroes: this.$state().heroes.concat(hero) });
  }

  async deleteHero(hero: Hero): Promise<void> {
    await firstValueFrom(this._heroService.deleteHero(hero.id));
    this.$state.set({ ...this.$state(), heroes: this.$state().heroes.filter((h) => h !== hero) });
  }
}
