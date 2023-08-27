import { AsyncPipe } from '@angular/common';
import { Component, OnInit, computed } from '@angular/core';
import { Hero } from '../../../../domain/hero';
import { LyHeroesComponent } from '../../views/ly-heroes/ly-heroes.component';
import { HeroesStore } from './heroes.store';

@Component({
  standalone: true,
  imports: [AsyncPipe, LyHeroesComponent],
  templateUrl: './heroes.component.html',
  providers: [HeroesStore],
})
export default class HeroesPageComponent implements OnInit {
  constructor(private readonly _componentStore: HeroesStore) {}

  $heroes = computed(() => this._componentStore.$state().heroes);

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._componentStore.getHeroes();
  }

  addHero(name: string): void {
    this._componentStore.addHero(name);
  }

  deleteHero(hero: Hero): void {
    this._componentStore.deleteHero(hero);
  }
}
