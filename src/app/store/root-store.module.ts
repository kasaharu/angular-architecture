import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { userReducer } from './root/user-store/reducers';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({ user: userReducer })],
})
export class RootStoreModule {}
