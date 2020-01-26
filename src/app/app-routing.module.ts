import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListModule } from './features/user-list/user-list.module';
import { UserListComponent } from './features/user-list/views/user-list/user-list.component';
import { UserModule } from './features/user/user.module';
import { UserComponent } from './features/user/views/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserListModule, UserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
