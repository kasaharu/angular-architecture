import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroDetailPageComponent } from './pages/hero-detail/hero-detail.component';
import { HeroDetailComponent } from './containers/hero-detail/hero-detail.component';
import { HeroInfoComponent } from './views/hero-info/hero-info.component';

@NgModule({
  declarations: [HeroDetailPageComponent, HeroDetailComponent, HeroInfoComponent],
  imports: [CommonModule, FormsModule],
})
export class HeroDetailModule {}
