import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../../domain/hero';
import { LyHeroDetailComponent } from '../../../../features/hero-detail/views/ly-hero-detail/ly-hero-detail.component';
import { HeroService } from '../../../../infrastructures/api/hero.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-ly-heroes',
  standalone: true,
  imports: [CommonModule, LyHeroDetailComponent],
  templateUrl: './ly-heroes.component.html',
  styleUrls: ['./ly-heroes.component.scss'],
})
export class LyHeroesComponent implements OnInit {
  constructor(private readonly _heroService: HeroService, private readonly _messageService: MessageService) {}

  heroes: Hero[] = [];
  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this._messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
