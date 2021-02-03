import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroInfoComponent implements OnInit {
  constructor(private readonly fb: FormBuilder) {}

  @Input()
  hero!: Hero;

  @Output()
  requestUpdateHero = new EventEmitter<Hero>();

  editableHero = this.fb.group({ id: [''], name: [''] });

  ngOnInit(): void {
    this.editableHero.setValue({ id: this.hero.id, name: this.hero.name });
  }

  onSubmit(): void {
    this.requestUpdateHero.emit(this.editableHero.value);
  }
}
