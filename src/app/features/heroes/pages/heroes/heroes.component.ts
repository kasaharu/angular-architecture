import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<app-heroes></app-heroes>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesPageComponent {}
