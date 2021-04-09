import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-dashboard-contents',
  templateUrl: './dashboard-contents.component.html',
  styleUrls: ['./dashboard-contents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContentsComponent implements OnInit {
  constructor() {}
  @Input() heroes!: Hero[];

  ngOnInit(): void {}
}
