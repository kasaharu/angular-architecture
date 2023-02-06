import { Routes } from '@angular/router';
import { HeroDetailPageComponent } from './features/hero-detail/pages/hero-detail/hero-detail.component';
import { HeroesPageComponent } from './features/heroes/pages/heroes/heroes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/routes') },
  { path: 'detail/:id', component: HeroDetailPageComponent },
  { path: 'heroes', component: HeroesPageComponent },
];
