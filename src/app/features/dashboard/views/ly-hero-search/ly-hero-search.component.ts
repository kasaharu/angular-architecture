import { NgForOf, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-ly-hero-search',
  standalone: true,
  imports: [NgIf, NgForOf, RouterLink],
  templateUrl: './ly-hero-search.component.html',
  styleUrls: ['./ly-hero-search.component.scss'],
})
export class LyHeroSearchComponent {
  @Input() heroes: Hero[] | null = null;
  @Output() heroSearched = new EventEmitter<string>();

  search(name: string): void {
    this.heroSearched.emit(name);
  }
}
