import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../../../domain/hero';
import { LyHeroDetailComponent } from '../../../../features/hero-detail/views/ly-hero-detail/ly-hero-detail.component';

@Component({
  selector: 'app-ly-heroes',
  standalone: true,
  imports: [CommonModule, LyHeroDetailComponent],
  templateUrl: './ly-heroes.component.html',
  styleUrls: ['./ly-heroes.component.scss'],
})
export class LyHeroesComponent {
  @Input() heroes: Hero[] = [];
  @Input() selectedHero?: Hero;
  @Output() heroSelected = new EventEmitter<Hero>();

  onClick(hero: Hero): void {
    this.heroSelected.emit(hero);
  }
}
