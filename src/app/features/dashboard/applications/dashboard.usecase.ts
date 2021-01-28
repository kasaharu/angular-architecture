import { Injectable } from '@angular/core';
import { HeroGateway } from '../../../infrastructures/gateways/hero.gateway';
import { DashboardStore } from './dashboard.store';

@Injectable()
export class DashboardUsecase {
  constructor(private readonly _componentStore: DashboardStore, private readonly _heroService: HeroGateway) {}

  async fetchHeroes(): Promise<void> {
    const heroes = await this._heroService.getHeroes().toPromise();
    this._componentStore.saveHeroes(heroes);
  }
}
