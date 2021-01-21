import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailPageComponent {}
