import { Routes } from '@angular/router';
import { HeroesPageComponent } from './features/heroes/pages/heroes/heroes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/routes') },
  { path: 'detail', loadChildren: () => import('./features/hero-detail/routes') },
  { path: 'heroes', component: HeroesPageComponent },
];
