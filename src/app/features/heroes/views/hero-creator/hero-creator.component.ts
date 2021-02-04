import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero-creator',
  templateUrl: './hero-creator.component.html',
  styleUrls: ['./hero-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroCreatorComponent {
  @Output()
  requestInputHeroName = new EventEmitter<string>();

  name = new FormControl();

  onSubmit(): void {
    this.requestInputHeroName.emit(this.name.value);
  }
}
