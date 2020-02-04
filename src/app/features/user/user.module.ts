import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { default as UserStoreReducer, featureName as UserStoreFeatureName } from './applications/user.store';
import { UserListComponent } from './views/pages/user-list/user-list.component';
import { UserFormComponent } from './views/user-form/user-form.component';
import { UserComponent } from './views/pages/user/user.component';

@NgModule({
  declarations: [UserListComponent, UserComponent, UserFormComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, StoreModule.forFeature(UserStoreFeatureName, UserStoreReducer)],
  exports: [UserListComponent, UserComponent],
})
export class UserModule {}
