import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../../../../domain/hero';
import { HeroGateway } from '../../../../infrastructures/gateways/hero.gateway';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit {
  constructor(private readonly _route: ActivatedRoute, private readonly _location: Location, private readonly _heroService: HeroGateway) {}

  hero$ = new BehaviorSubject<Hero | null>(null);

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    this._route.paramMap.subscribe((pmap) => {
      const id = pmap.get('id');
      if (id === null) {
        // TOOD: null の場合のエラーハンドリングが必要
        return;
      }
      this._heroService.getHero(+id).subscribe((hero) => this.hero$.next(hero));
    });
  }

  goBack(): void {
    this._location.back();
  }
}
