import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { HeroGateway } from '../../../../data-access/gateways/hero.gateway';
import { Hero } from '../../../../domain/hero';

export interface HeroDetailState {
  hero: Hero | null;
}

@Injectable()
export class HeroDetailUsecase extends ComponentStore<HeroDetailState> {
  constructor(private readonly _heroGateway: HeroGateway) {
    super({ hero: null });
  }

  readonly hero$: Observable<Hero | null> = this.select((state) => state.hero);

  readonly saveHero = this.updater((state, hero: Hero) => ({ ...state, hero }));

  async fetchHero(id: number): Promise<void> {
    const hero = await this._heroGateway.getHero(id).toPromise();
    this.saveHero(hero);
  }

  async updateHero(hero: Hero): Promise<void> {
    await this._heroGateway.putHero(hero).toPromise();
    this.saveHero(hero);
  }
}
