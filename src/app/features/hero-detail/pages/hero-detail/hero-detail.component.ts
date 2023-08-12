import { Component, OnInit, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../../../domain/hero';
import { LyHeroDetailComponent } from '../../views/ly-hero-detail/ly-hero-detail.component';
import { HeroDetailService } from './hero-detail.service';

@Component({
  standalone: true,
  imports: [LyHeroDetailComponent],
  templateUrl: './hero-detail.component.html',
  providers: [HeroDetailService],
})
export class HeroDetailPageComponent implements OnInit {
  private readonly _route = inject(ActivatedRoute);
  private readonly _service = inject(HeroDetailService);

  $hero = computed(() => this._service.$state().hero);

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._service.getHero(id);
  }

  updateHero(hero: Hero): void {
    this._service.updateHero(hero);
  }
}
