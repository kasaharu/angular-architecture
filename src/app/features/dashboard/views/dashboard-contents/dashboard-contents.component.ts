import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-contents',
  templateUrl: './dashboard-contents.component.html',
  styleUrls: ['./dashboard-contents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardContentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
