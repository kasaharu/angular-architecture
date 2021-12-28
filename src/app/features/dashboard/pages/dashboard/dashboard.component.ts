import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DashboardUsecase } from './dashboard.usecase';

@Component({
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardUsecase],
})
export class DashboardComponent implements OnInit {
  constructor(private readonly _usecase: DashboardUsecase) {}

  heroes$ = this._usecase.heroes$.pipe(map((heroes) => (heroes === null ? null : heroes.slice(1, 5))));

  ngOnInit(): void {
    this._usecase.fetchHeroes();
  }
}
