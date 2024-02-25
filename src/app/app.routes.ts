import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/routes') },
  { path: 'detail', loadChildren: () => import('./features/hero-detail/routes') },
  // NOTE: loadComponent を使うことで feature ROUTES も不要になる
  { path: 'heroes', loadComponent: () => import('./features/heroes/pages/heroes/heroes.component') },
];
