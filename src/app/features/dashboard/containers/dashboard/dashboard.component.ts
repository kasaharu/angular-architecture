import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../../../../domain/hero';
import { HeroGateway } from '../../../../infrastructures/gateways/hero.gateway';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(private readonly _heroService: HeroGateway) {}

  heroes$ = new BehaviorSubject<Hero[] | null>(null);

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe((heroes) => {
      this.heroes$.next(heroes.slice(1, 5));
    });
  }
}
