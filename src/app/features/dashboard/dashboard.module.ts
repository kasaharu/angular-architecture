import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardPageComponent, DashboardComponent],
  imports: [CommonModule, RouterModule],
})
export class DashboardModule {}
