import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroDetailModule } from '../hero-detail/hero-detail.module';
import { HeroesPageComponent } from './pages/heroes/heroes.component';
import { HeroesComponent } from './containers/heroes/heroes.component';

@NgModule({
  declarations: [HeroesPageComponent, HeroesComponent],
  imports: [CommonModule, RouterModule, HeroDetailModule],
})
export class HeroesModule {}
