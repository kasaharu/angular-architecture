import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<app-heroes></app-heroes>`,
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesPageComponent {}
