import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<app-hero-detail></app-hero-detail>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailPageComponent {}
