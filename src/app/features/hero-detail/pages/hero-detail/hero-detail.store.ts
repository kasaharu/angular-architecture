import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { firstValueFrom } from 'rxjs';
import { Hero } from '../../../../domain/hero';
import { HeroApi } from '../../../../infrastructures/api/hero.api';

interface HeroDetailState {
  hero: Hero | null;
}

@Injectable()
export class HeroDetailStore extends ComponentStore<HeroDetailState> {
  constructor(private readonly _heroService: HeroApi) {
    super({ hero: null });
  }

  readonly hero$ = this.select((state) => state.hero);
  readonly setHero = this.updater((state, hero: Hero) => ({ ...state, hero }));

  async getHero(id: number): Promise<void> {
    const hero = await firstValueFrom(this._heroService.getHero(id));
    this.setHero(hero);
  }

  async updateHero(hero: Hero): Promise<void> {
    await firstValueFrom(this._heroService.updateHero(hero));
    this.setHero(hero);
  }
}
