import { Injectable } from '@angular/core';
import { HeroGateway } from '../../../infrastructures/gateways/hero.gateway';
import { HeroesStore } from './heroes.store';

@Injectable()
export class HeroesUsecase {
  constructor(private readonly _componentStore: HeroesStore, private readonly _heroGateway: HeroGateway) {}

  async fetchHeroes(): Promise<void> {
    const heroes = await this._heroGateway.getHeroes().toPromise();
    this._componentStore.saveHeroes(heroes);
  }
}
