import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero } from '../../../../domain/hero';
import { HeroGateway } from '../../../../infrastructures/gateways/hero.gateway';

@Component({
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesPageComponent implements OnInit {
  constructor(private readonly _heroService: HeroGateway) {}

  heroes: Hero[] | null = null;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
