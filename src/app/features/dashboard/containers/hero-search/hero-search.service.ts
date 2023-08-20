import { Injectable, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Hero } from '../../../../domain/hero';
import { HeroApi } from '../../../../infrastructures/api/hero.api';

interface HeroSearchState {
  term: string;
  heroes: Hero[];
}

const initialState: HeroSearchState = {
  term: '',
  heroes: [],
};

@Injectable()
export class HeroSearchService {
  private readonly _heroService = inject(HeroApi);

  readonly $state = signal<HeroSearchState>(initialState);

  // TODO: debounceTime(), distinctUntilChanged() と同じことができるようにする
  async search(term: string): Promise<void> {
    const heroes = await firstValueFrom(this._heroService.searchHeroes(term));
    this.$state.set({ ...this.$state(), heroes, term });
  }
}
