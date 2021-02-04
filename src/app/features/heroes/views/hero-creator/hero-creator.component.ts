import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero-creator',
  templateUrl: './hero-creator.component.html',
  styleUrls: ['./hero-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCreatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
