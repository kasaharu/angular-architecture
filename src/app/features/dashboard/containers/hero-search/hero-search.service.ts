import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HeroService } from '../../../../infrastructures/api/hero.service';

interface HeroSearchState {
  term: string;
}

@Injectable()
export class HeroSearchService extends ComponentStore<HeroSearchState> {
  constructor(private readonly _heroService: HeroService) {
    super({ term: '' });
  }

  readonly heroes$ = this.select((state) => state.term).pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((term: string) => this._heroService.searchHeroes(term)),
  );
  readonly setTerm = this.updater((state, term: string) => ({ ...state, term }));

  search(term: string): void {
    this.setTerm(term);
  }
}
