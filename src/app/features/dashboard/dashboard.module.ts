import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DashboardContentsComponent } from './views/dashboard-contents/dashboard-contents.component';

@NgModule({
  declarations: [DashboardPageComponent, DashboardComponent, DashboardContentsComponent],
  imports: [CommonModule, RouterModule],
})
export class DashboardModule {}
