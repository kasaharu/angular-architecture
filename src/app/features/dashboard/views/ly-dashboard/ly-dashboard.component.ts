import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ly-dashboard',
  templateUrl: './ly-dashboard.component.html',
  styleUrls: ['./ly-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
