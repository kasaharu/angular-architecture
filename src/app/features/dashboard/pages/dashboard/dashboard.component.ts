import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<app-dashboard></app-dashboard>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {}
