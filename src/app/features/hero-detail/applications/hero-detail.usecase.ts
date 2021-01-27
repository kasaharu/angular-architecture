import { Injectable } from '@angular/core';
import { HeroGateway } from '../../../infrastructures/gateways/hero.gateway';
import { HeroDetailStore } from './hero-detail.store';

@Injectable()
export class HeroDetailUsecase {
  constructor(private readonly _componentStore: HeroDetailStore, private readonly _heroGateway: HeroGateway) {}

  setHeroId(id: number) {
    this._componentStore.setId(id);
  }

  async fetchHero(id: number): Promise<void> {
    const hero = await this._heroGateway.getHero(id).toPromise();
    this._componentStore.saveHero(hero);
  }
}
