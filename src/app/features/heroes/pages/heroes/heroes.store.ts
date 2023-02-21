import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { firstValueFrom } from 'rxjs';
import { Hero } from '../../../../domain/hero';
import { HeroApi } from '../../../../infrastructures/api/hero.api';

interface HeroesState {
  heroes: Hero[];
}

@Injectable()
export class HeroesStore extends ComponentStore<HeroesState> {
  constructor(private readonly _heroService: HeroApi) {
    super({ heroes: [] });
  }

  readonly heroes$ = this.select((state) => state.heroes);
  readonly setHeroes = this.updater((state, heroes: Hero[]) => ({ ...state, heroes }));

  async getHeroes(): Promise<void> {
    const heroes = await firstValueFrom(this._heroService.getHeroes());
    this.setHeroes(heroes);
  }

  async addHero(name: string): Promise<void> {
    name = name.trim();
    if (!name) {
      return;
    }

    const hero = await firstValueFrom(this._heroService.addHero({ name } as Hero));
    const heroes = await firstValueFrom(this.heroes$);

    this.setHeroes(heroes.concat(hero));
  }

  async deleteHero(hero: Hero): Promise<void> {
    await firstValueFrom(this._heroService.deleteHero(hero.id));
    const heroes = await firstValueFrom(this.heroes$);

    this.setHeroes(heroes.filter((h) => h !== hero));
  }
}
