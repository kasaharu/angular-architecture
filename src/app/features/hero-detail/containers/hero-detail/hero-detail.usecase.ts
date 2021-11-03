import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { HeroGateway } from '../../../../data-access/gateways/hero.gateway';
import { Hero } from '../../../../domain/hero';

export interface HeroDetailState {
  id: number | null;
  hero: Hero | null;
}

@Injectable()
export class HeroDetailUsecase extends ComponentStore<HeroDetailState> {
  constructor(private readonly _heroGateway: HeroGateway) {
    super({ id: null, hero: null });
  }

  readonly id$: Observable<number | null> = this.select((state) => state.id);
  readonly hero$: Observable<Hero | null> = this.select((state) => state.hero);

  readonly setId = this.updater((state, id: number) => ({ ...state, id }));
  readonly saveHero = this.updater((state, hero: Hero) => ({ ...state, hero }));

  setHeroId(id: number): void {
    this.setId(id);
  }

  async fetchHero(id: number): Promise<void> {
    const hero = await this._heroGateway.getHero(id).toPromise();
    this.saveHero(hero);
  }

  async updateHero(hero: Hero): Promise<void> {
    await this._heroGateway.putHero(hero).toPromise();
    this.saveHero(hero);
  }
}
