import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<app-dashboard></app-dashboard>`,
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {}
