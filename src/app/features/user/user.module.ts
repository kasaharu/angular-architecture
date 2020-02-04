import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { default as UserStoreReducer, featureName as UserStoreFeatureName } from './applications/user.store';
import { UsersSummaryComponent } from './views/pages/users-summary/users-summary.component';
import { UserComponent } from './views/pages/user/user.component';
import { UserFormComponent } from './views/user-form/user-form.component';

@NgModule({
  declarations: [UsersSummaryComponent, UserComponent, UserFormComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, StoreModule.forFeature(UserStoreFeatureName, UserStoreReducer)],
  exports: [UsersSummaryComponent, UserComponent],
})
export class UserModule {}
