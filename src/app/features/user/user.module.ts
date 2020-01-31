import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { default as reducer, featureName } from './applications/user.store';
import { UserFormComponent } from './views/user-form/user-form.component';
import { UserComponent } from './views/user/user.component';

@NgModule({
  declarations: [UserComponent, UserFormComponent],
  imports: [CommonModule, ReactiveFormsModule, StoreModule.forFeature(featureName, reducer)],
  exports: [UserComponent],
})
export class UserModule {}
