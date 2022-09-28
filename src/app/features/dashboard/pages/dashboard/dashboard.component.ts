import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../../domain/hero';
import { HeroService } from '../../../../infrastructures/api/hero.service';
import { LyDashboardComponent } from '../../views/ly-dashboard/ly-dashboard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LyDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  constructor(private readonly _heroService: HeroService) {}
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
