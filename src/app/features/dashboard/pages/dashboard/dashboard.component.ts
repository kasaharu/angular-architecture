import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from '../../../../domain/hero';
import { HeroService } from '../../../../infrastructures/gateways/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(private readonly _heroService: HeroService) {}

  heroes: Hero[] | null = null;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes.slice(1, 5);
    });
  }
}
