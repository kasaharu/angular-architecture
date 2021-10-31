import { Injectable } from '@angular/core';
import { Hero } from '../../../domain/hero';
import { HeroGateway } from '../../../data-access/gateways/hero.gateway';
import { HeroDetailStore } from './hero-detail.store';

@Injectable()
export class HeroDetailUsecase {
  constructor(private readonly _componentStore: HeroDetailStore, private readonly _heroGateway: HeroGateway) {}

  setHeroId(id: number): void {
    this._componentStore.setId(id);
  }

  async fetchHero(id: number): Promise<void> {
    const hero = await this._heroGateway.getHero(id).toPromise();
    this._componentStore.saveHero(hero);
  }

  async updateHero(hero: Hero): Promise<void> {
    await this._heroGateway.putHero(hero).toPromise();
    this._componentStore.saveHero(hero);
  }
}
