import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/infrastructures/gateways/hero.service';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit {
  constructor(private readonly _route: ActivatedRoute, private readonly _heroService: HeroService) {}

  hero: Hero | null = null;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if (id === null) {
      // TOOD: null の場合のエラーハンドリングが必要
      return;
    }
    this._heroService.getHero(+id).subscribe((hero) => (this.hero = hero));
  }
}
