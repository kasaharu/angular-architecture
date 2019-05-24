import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { userReducer } from './root/user-store/reducers';
import { todoReducer } from './root/todo-store/reducers';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({ user: userReducer, todo: todoReducer })],
})
export class RootStoreModule {}
