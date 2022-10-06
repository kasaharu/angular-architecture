import { NgForOf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-ly-heroes',
  standalone: true,
  imports: [NgForOf, RouterLinkWithHref],
  templateUrl: './ly-heroes.component.html',
  styleUrls: ['./ly-heroes.component.scss'],
})
export class LyHeroesComponent {
  @Input() heroes: Hero[] | null = null;
  @Output() heroAdded = new EventEmitter<string>();
  @Output() heroDeleted = new EventEmitter<Hero>();

  onClickAddButton(name: string): void {
    this.heroAdded.emit(name);
  }

  onClickDeleteButton(hero: Hero): void {
    this.heroDeleted.emit(hero);
  }
}
