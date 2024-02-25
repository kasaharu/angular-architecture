import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../../../domain/hero';
import { HeroSearchComponent } from '../../containers/hero-search/hero-search.component';

@Component({
  selector: 'app-ly-dashboard',
  standalone: true,
  imports: [RouterLink, HeroSearchComponent],
  templateUrl: './ly-dashboard.component.html',
  styleUrls: ['./ly-dashboard.component.scss'],
})
export class LyDashboardComponent {
  heroes = input.required<Hero[]>();
}
