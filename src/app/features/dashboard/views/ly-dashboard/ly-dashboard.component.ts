import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-ly-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ly-dashboard.component.html',
  styleUrls: ['./ly-dashboard.component.scss'],
})
export class LyDashboardComponent {
  @Input() heroes: Hero[] = [];
}
