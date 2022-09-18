import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../../domain/hero';
import { HEROES } from '../../../../mock-heroes';

@Component({
  selector: 'app-ly-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
