import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard/dashboard.component';
import { HeroesPageComponent } from './features/heroes/pages/heroes/heroes.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'heroes', component: HeroesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
