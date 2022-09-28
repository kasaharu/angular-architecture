import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-ly-heroes',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
