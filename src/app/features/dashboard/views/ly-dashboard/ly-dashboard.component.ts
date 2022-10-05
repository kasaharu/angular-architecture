import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Hero } from '../../../../domain/hero';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-ly-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, HeroSearchComponent],
  templateUrl: './ly-dashboard.component.html',
  styleUrls: ['./ly-dashboard.component.scss'],
})
export class LyDashboardComponent {
  @Input() heroes: Hero[] | null = null;
}
