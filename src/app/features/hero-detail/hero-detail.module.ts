import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './containers/hero-detail/hero-detail.component';
import { HeroDetailPageComponent } from './pages/hero-detail/hero-detail.component';
import { HeroInfoComponent } from './views/hero-info/hero-info.component';

@NgModule({
  declarations: [HeroDetailPageComponent, HeroDetailComponent, HeroInfoComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class HeroDetailModule {}
