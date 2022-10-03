import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../../domain/hero';
import { LyHeroesComponent } from '../../views/ly-heroes/ly-heroes.component';
import { HeroesStore } from './heroes.store';

@Component({
  standalone: true,
  imports: [CommonModule, LyHeroesComponent],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroesStore],
})
export class HeroesPageComponent implements OnInit {
  constructor(private readonly _componentStore: HeroesStore) {}

  heroes$ = this._componentStore.heroes$;

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
