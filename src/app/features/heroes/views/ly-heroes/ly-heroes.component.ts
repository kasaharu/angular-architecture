import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ly-heroes',
  templateUrl: './ly-heroes.component.html',
  styleUrls: ['./ly-heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LyHeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
