import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
