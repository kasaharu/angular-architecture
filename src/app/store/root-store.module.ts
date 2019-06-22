import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { userReducer } from './root/user-store/reducers';
import { todoReducer } from './root/todo-store/reducers';
import { postReducer } from './root/post-store/reducers';
import { albumReducer } from './root/album-store/reducers';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({ user: userReducer, todo: todoReducer, post: postReducer, album: albumReducer })],
})
export class RootStoreModule {}
