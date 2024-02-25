import { Location, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-ly-hero-detail',
  standalone: true,
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './ly-hero-detail.component.html',
  styleUrls: ['./ly-hero-detail.component.scss'],
})
export class LyHeroDetailComponent {
  constructor(private readonly _location: Location) {}
  @Input() hero: Hero | null = null;
  @Output() saveButtonClicked = new EventEmitter<Hero>();

  goBack() {
    this._location.back();
  }

  save() {
    if (this.hero) {
      this.saveButtonClicked.emit(this.hero);
      this.goBack();
    }
  }
}
