import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../../domain/hero';
import { HeroService } from '../../../../infrastructures/api/hero.service';
import { MessageService } from '../../../../shared/services/message.service';
import { LyHeroesComponent } from '../../views/ly-heroes/ly-heroes.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, LyHeroesComponent],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesPageComponent implements OnInit {
  constructor(private readonly _heroService: HeroService, private readonly _messageService: MessageService) {}

  heroes: Hero[] = [];
  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
