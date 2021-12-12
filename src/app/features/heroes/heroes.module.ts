import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroCreatorComponent } from './views/hero-creator/hero-creator.component';
import { LyHeroesComponent } from './views/ly-heroes/ly-heroes.component';

@NgModule({
  declarations: [HeroesComponent, HeroCreatorComponent, LyHeroesComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class HeroesModule {}
