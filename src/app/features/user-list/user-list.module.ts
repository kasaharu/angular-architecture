import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './views/user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import { default as reducer, featureName } from './applications/user-list.store';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, StoreModule.forFeature(featureName, reducer)],
  exports: [UserListComponent],
})
export class UserListModule {}
