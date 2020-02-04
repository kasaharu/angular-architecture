import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './features/user/user.module';
import { UsersSummaryComponent } from './features/user/views/pages/users-summary/users-summary.component';
import { UserComponent } from './features/user/views/pages/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersSummaryComponent },
  { path: 'users/:id', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
