import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, RouterModule],
})
export class DashboardModule {}
