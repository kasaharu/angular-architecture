import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroInfoComponent {
  @Input()
  hero!: Hero;
}
