import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero } from '../../../../domain/hero';
import { HeroesUsecase } from './heroes.usecase';

@Component({
  template: '<app-ly-heroes [heroes]="heroes$ | async"></app-ly-heroes>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HeroesUsecase],
})
export class HeroesComponent implements OnInit {
  constructor(private readonly _usecase: HeroesUsecase) {}

  heroes$ = this._usecase.heroes$;

  ngOnInit(): void {
    this._usecase.fetchHeroes();
  }

  add(heroName: string): void {
    this._usecase.createHero(heroName);
  }

  delete(hero: Hero): void {
    this._usecase.deleteHero(hero);
  }
}
