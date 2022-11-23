import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../../../domain/hero';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-ly-dashboard',
  standalone: true,
  imports: [NgForOf, RouterLink, HeroSearchComponent],
  templateUrl: './ly-dashboard.component.html',
  styleUrls: ['./ly-dashboard.component.scss'],
})
export class LyDashboardComponent {
  @Input() heroes: Hero[] | null = null;
}
