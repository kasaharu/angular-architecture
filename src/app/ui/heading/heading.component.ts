import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
