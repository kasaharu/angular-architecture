import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HeroApi } from '../../../../infrastructures/api/hero.api';
import { DashboardStore } from './dashboard.store';

@Injectable()
export class DashboardService {
  private readonly _store = inject(DashboardStore);
  private readonly _heroApi = inject(HeroApi);

  async getHeroes(): Promise<void> {
    const heroes = await firstValueFrom(this._heroApi.getHeroes());
    this._store.setHeroes(heroes);
  }
}
