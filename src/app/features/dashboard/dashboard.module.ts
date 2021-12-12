import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardContentsComponent } from './views/dashboard-contents/dashboard-contents.component';
import { LyDashboardComponent } from './views/ly-dashboard/ly-dashboard.component';

@NgModule({
  declarations: [DashboardComponent, DashboardContentsComponent, LyDashboardComponent],
  imports: [CommonModule, RouterModule],
})
export class DashboardModule {}
