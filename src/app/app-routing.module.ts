import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './containers/album/album.component';
import { DetailComponent } from './containers/detail/detail.component';
import { HomeComponent } from './containers/home/home.component';
import { PostComponent } from './containers/post/post.component';
import { TodoComponent } from './containers/todo/todo.component';
import { UserListModule } from './features/user-list/user-list.module';
import { UserListComponent } from './features/user-list/views/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users/:id',
    component: DetailComponent,
    children: [
      { path: 'todos', component: TodoComponent },
      { path: 'posts', component: PostComponent },
      { path: 'albums', component: AlbumComponent },
      { path: '', redirectTo: 'todos', pathMatch: 'full' },
    ],
  },
  { path: 'user-list', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserListModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
