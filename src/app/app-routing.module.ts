import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './containers/detail/detail.component';
import { HomeComponent } from './containers/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'users/:id', component: DetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
