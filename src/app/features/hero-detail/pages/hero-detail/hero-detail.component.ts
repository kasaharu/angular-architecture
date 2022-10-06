import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../../../domain/hero';
import { LyHeroDetailComponent } from '../../views/ly-hero-detail/ly-hero-detail.component';
import { HeroDetailStore } from './hero-detail.store';

@Component({
  standalone: true,
  imports: [AsyncPipe, LyHeroDetailComponent],
  templateUrl: './hero-detail.component.html',
  providers: [HeroDetailStore],
})
export class HeroDetailPageComponent implements OnInit {
  constructor(private readonly _route: ActivatedRoute, private readonly _componentStore: HeroDetailStore) {}
  hero$ = this._componentStore.hero$;

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._componentStore.getHero(id);
  }

  updateHero(hero: Hero): void {
    this._componentStore.updateHero(hero);
  }
}
