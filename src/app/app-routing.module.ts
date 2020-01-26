import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListModule } from './features/user-list/user-list.module';
import { UserListComponent } from './features/user-list/views/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserListModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
