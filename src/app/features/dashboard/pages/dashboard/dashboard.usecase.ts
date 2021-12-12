import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { HeroGateway } from '../../../../data-access/gateways/hero.gateway';
import { Hero } from '../../../../domain/hero';

export interface DashboardState {
  heroes: Hero[] | null;
}

@Injectable()
export class DashboardUsecase extends ComponentStore<DashboardState> {
  constructor(private readonly _heroGateway: HeroGateway) {
    super({ heroes: null });
  }

  readonly heroes$: Observable<Hero[] | null> = this.select((state) => state.heroes);
  readonly saveHeroes = this.updater((_, heroes: Hero[]) => ({ heroes }));

  async fetchHeroes(): Promise<void> {
    const heroes = await this._heroGateway.getHeroes().toPromise();
    this.saveHeroes(heroes);
  }
}
