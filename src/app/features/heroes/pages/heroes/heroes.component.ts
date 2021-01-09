import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  hero: Hero = { id: 1, name: 'Windstorm' };

  constructor() {}

  ngOnInit(): void {}
}
