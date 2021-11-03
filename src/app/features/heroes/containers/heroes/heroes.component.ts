import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero } from '../../../../domain/hero';
import { HeroesUsecase } from '../../applications/heroes.usecase';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
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
