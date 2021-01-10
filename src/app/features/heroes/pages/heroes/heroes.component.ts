import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero } from '../../../../domain/hero';
import { HEROES } from '../../../../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero | null = null;

  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
