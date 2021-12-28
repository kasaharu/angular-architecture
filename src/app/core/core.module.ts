import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeadingComponent } from './components/heading/heading.component';

@NgModule({
  declarations: [HeadingComponent],
  imports: [CommonModule],
  exports: [HeadingComponent],
})
export class CoreModule {}
