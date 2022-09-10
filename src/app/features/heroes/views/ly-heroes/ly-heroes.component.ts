import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-ly-heroes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ly-heroes.component.html',
  styleUrls: ['./ly-heroes.component.scss'],
})
export class LyHeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
}
