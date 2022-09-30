import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../../domain/hero';
import { HeroService } from '../../../../infrastructures/api/hero.service';
import { LyHeroesComponent } from '../../views/ly-heroes/ly-heroes.component';

@Component({
  standalone: true,
  imports: [CommonModule, LyHeroesComponent],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesPageComponent implements OnInit {
  constructor(private readonly _heroService: HeroService) {}

  heroes: Hero[] = [];
  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  addHero(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }

    this._heroService.addHero({ name } as Hero).subscribe((hero) => this.heroes.push(hero));
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this._heroService.deleteHero(hero.id).subscribe();
  }
}
