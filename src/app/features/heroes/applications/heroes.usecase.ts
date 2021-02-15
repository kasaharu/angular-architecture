import { Injectable } from '@angular/core';
import { Hero } from '../../../domain/hero';
import { HeroGateway } from '../../../infrastructures/gateways/hero.gateway';
import { HeroesStore } from './heroes.store';

@Injectable()
export class HeroesUsecase {
  constructor(private readonly _componentStore: HeroesStore, private readonly _heroGateway: HeroGateway) {}

  async fetchHeroes(): Promise<void> {
    const heroes = await this._heroGateway.getHeroes().toPromise();
    this._componentStore.saveHeroes(heroes);
  }

  async createHero(heroName: string): Promise<void> {
    const hero = await this._heroGateway.postHero({ name: heroName.trim() } as Hero).toPromise();
    this._componentStore.addHero(hero);
  }

  async deleteHero(hero: Hero): Promise<void> {
    await this._heroGateway.deleteHero(hero).toPromise();
    this._componentStore.deleteHero(hero);
  }
}
