import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { default as reducer, featureName } from './applications/user-list.store';
import { UserListComponent } from './views/user-list/user-list.component';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, RouterModule, StoreModule.forFeature(featureName, reducer)],
  exports: [UserListComponent],
})
export class UserListModule {}
