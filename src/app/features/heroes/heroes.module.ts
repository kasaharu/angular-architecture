import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroDetailModule } from '../hero-detail/hero-detail.module';
import { HeroesComponent } from './pages/heroes/heroes.component';

@NgModule({
  declarations: [HeroesComponent],
  imports: [CommonModule, HeroDetailModule],
  exports: [HeroesComponent],
})
export class HeroesModule {}
