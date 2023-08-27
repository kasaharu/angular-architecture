import { AsyncPipe } from '@angular/common';
import { Component, OnInit, computed } from '@angular/core';
import { Hero } from '../../../../domain/hero';
import { LyHeroesComponent } from '../../views/ly-heroes/ly-heroes.component';
import { HeroesService } from './heroes.service';

@Component({
  standalone: true,
  imports: [AsyncPipe, LyHeroesComponent],
  templateUrl: './heroes.component.html',
  providers: [HeroesService],
})
export default class HeroesPageComponent implements OnInit {
  constructor(private readonly _service: HeroesService) {}

  $heroes = computed(() => this._service.$state().heroes);

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._service.getHeroes();
  }

  addHero(name: string): void {
    this._service.addHero(name);
  }

  deleteHero(hero: Hero): void {
    this._service.deleteHero(hero);
  }
}
