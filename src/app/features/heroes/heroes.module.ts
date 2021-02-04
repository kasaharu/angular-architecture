import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './containers/heroes/heroes.component';
import { HeroesPageComponent } from './pages/heroes/heroes.component';
import { HeroCreatorComponent } from './views/hero-creator/hero-creator.component';

@NgModule({
  declarations: [HeroesPageComponent, HeroesComponent, HeroCreatorComponent],
  imports: [CommonModule, RouterModule],
})
export class HeroesModule {}
