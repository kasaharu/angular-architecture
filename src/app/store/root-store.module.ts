import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { userReducer } from './root/user-store/reducers';
import { UserEffects } from './root/user-store/effects';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({ user: userReducer }), EffectsModule.forRoot([UserEffects])],
})
export class RootStoreModule {}
