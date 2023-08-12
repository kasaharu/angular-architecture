import { Injectable, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Hero } from '../../../../domain/hero';
import { HeroApi } from '../../../../infrastructures/api/hero.api';

interface HeroDetailState {
  hero: Hero | null;
}

const initialState: HeroDetailState = {
  hero: null,
};

@Injectable()
export class HeroDetailService {
  private readonly _heroApi = inject(HeroApi);

  readonly $state = signal<HeroDetailState>(initialState);

  async getHero(id: number): Promise<void> {
    const hero = await firstValueFrom(this._heroApi.getHero(id));
    this.$state.set({ hero });
  }

  async updateHero(hero: Hero): Promise<void> {
    await firstValueFrom(this._heroApi.updateHero(hero));
    this.$state.set({ hero });
  }
}
