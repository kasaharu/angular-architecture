import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../../../domain/hero';
import { HeroService } from '../../../../infrastructures/api/hero.service';
import { LyHeroDetailComponent } from '../../views/ly-hero-detail/ly-hero-detail.component';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, LyHeroDetailComponent],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailPageComponent implements OnInit {
  constructor(private readonly _route: ActivatedRoute, private readonly _heroService: HeroService) {}
  hero!: Hero;

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this.getHero(id);
  }

  getHero(id: number): void {
    this._heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  updateHero(hero: Hero): void {
    this._heroService.updateHero(hero).subscribe();
  }
}
