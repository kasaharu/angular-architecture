import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesPageComponent } from './features/heroes/pages/heroes/heroes.component';

const routes: Routes = [{ path: '', component: HeroesPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
