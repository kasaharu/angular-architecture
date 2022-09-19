import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from '../../../../domain/hero';
import { LyHeroDetailComponent } from '../../../../features/hero-detail/views/ly-hero-detail/ly-hero-detail.component';
import { HEROES } from '../../../../mock-heroes';

@Component({
  selector: 'app-ly-heroes',
  standalone: true,
  imports: [CommonModule, LyHeroDetailComponent],
  templateUrl: './ly-heroes.component.html',
  styleUrls: ['./ly-heroes.component.scss'],
})
export class LyHeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
