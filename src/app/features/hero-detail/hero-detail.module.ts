import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeroDetailComponent],
})
export class HeroDetailModule {}
