import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './pages/heroes/heroes.component';



@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
