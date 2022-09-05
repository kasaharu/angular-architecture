import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LyHeroesComponent } from '../../views/ly-heroes/ly-heroes.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, LyHeroesComponent],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesPageComponent {}
