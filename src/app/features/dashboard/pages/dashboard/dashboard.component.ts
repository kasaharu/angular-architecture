import { Component } from '@angular/core';
import { DashboardComponent } from '../../containers/dashboard/dashboard.component';

@Component({
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardPageComponent {}
