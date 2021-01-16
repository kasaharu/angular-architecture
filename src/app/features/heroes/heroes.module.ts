import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroDetailModule } from '../hero-detail/hero-detail.module';
import { HeroesComponent } from './pages/heroes/heroes.component';

@NgModule({
  declarations: [HeroesComponent],
  imports: [CommonModule, RouterModule, HeroDetailModule],
  exports: [HeroesComponent],
})
export class HeroesModule {}
