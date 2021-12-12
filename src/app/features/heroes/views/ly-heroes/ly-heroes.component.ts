import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-ly-heroes',
  templateUrl: './ly-heroes.component.html',
  styleUrls: ['./ly-heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyHeroesComponent implements OnInit {
  @Input() heroes: Hero[] | null = null;
  @Output() heroAdded = new EventEmitter<string>();
  @Output() heroDeleted = new EventEmitter<Hero>();

  constructor() {}

  ngOnInit(): void {}

  add(heroName: string): void {
    this.heroAdded.emit(heroName);
  }

  delete(hero: Hero): void {
    this.heroDeleted.emit(hero);
  }
}
