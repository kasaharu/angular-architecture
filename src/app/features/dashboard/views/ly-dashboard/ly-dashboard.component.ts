import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-ly-dashboard',
  templateUrl: './ly-dashboard.component.html',
  styleUrls: ['./ly-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyDashboardComponent implements OnInit {
  constructor() {}
  @Input() heroes: Hero[] | null = null;

  ngOnInit(): void {}
}
