import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/containers/dashboard/dashboard.component';
import { HeroDetailPageComponent } from './features/hero-detail/pages/hero-detail/hero-detail.component';
import { HeroesPageComponent } from './features/heroes/pages/heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesPageComponent },
  { path: 'detail/:id', component: HeroDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
