import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroesComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeroesComponent],
})
export class HeroesModule {}
