import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MessageService } from '../../../../shared/services/message.service';
import { Hero } from '../../../../domain/hero';
import { HeroService } from '../../../../infrastructures/gateways/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  constructor(private readonly _heroService: HeroService, private readonly _messageService: MessageService) {}

  heroes: Hero[] | null = null;
  selectedHero: Hero | null = null;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this._messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
