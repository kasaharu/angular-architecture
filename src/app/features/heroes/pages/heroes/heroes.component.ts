import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesPageComponent {}
