import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit {
  constructor() {}
  @Input()
  hero: Hero | null = null;

  ngOnInit(): void {}
}
