import { Component, EventEmitter, Output, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-ly-hero-search',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ly-hero-search.component.html',
  styleUrls: ['./ly-hero-search.component.scss'],
})
export class LyHeroSearchComponent {
  heroes = input.required<Hero[]>();
  @Output() heroSearched = new EventEmitter<string>();

  search(name: string): void {
    this.heroSearched.emit(name);
  }
}
