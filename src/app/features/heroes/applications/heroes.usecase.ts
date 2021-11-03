import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { HeroGateway } from '../../../data-access/gateways/hero.gateway';
import { Hero } from '../../../domain/hero';

export interface HeroesState {
  heroes: Hero[] | null;
}

@Injectable()
export class HeroesUsecase extends ComponentStore<HeroesState> {
  constructor(private readonly _heroGateway: HeroGateway) {
    super({ heroes: null });
  }

  readonly heroes$: Observable<Hero[] | null> = this.select((state) => state.heroes);
  readonly saveHeroes = this.updater((_, heroes: Hero[]) => ({ heroes }));
  readonly addHero = this.updater((state, hero: Hero) => {
    return state.heroes === null ? { heroes: [hero] } : { heroes: [...state.heroes, hero] };
  });
  readonly delete = this.updater((state, hero: Hero) => {
    return { heroes: state.heroes === null ? null : state.heroes.filter((h) => h.id !== hero.id) };
  });

  async fetchHeroes(): Promise<void> {
    const heroes = await this._heroGateway.getHeroes().toPromise();
    this.saveHeroes(heroes);
  }

  async createHero(heroName: string): Promise<void> {
    const hero = await this._heroGateway.postHero({ name: heroName.trim() } as Hero).toPromise();
    this.addHero(hero);
  }

  async deleteHero(hero: Hero): Promise<void> {
    await this._heroGateway.deleteHero(hero).toPromise();
    this.delete(hero);
  }
}
