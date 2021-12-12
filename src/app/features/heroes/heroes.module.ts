import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './containers/heroes/heroes.component';
import { HeroCreatorComponent } from './views/hero-creator/hero-creator.component';

@NgModule({
  declarations: [HeroesComponent, HeroCreatorComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class HeroesModule {}
