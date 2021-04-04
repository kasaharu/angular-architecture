import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DashboardStore } from '../../applications/dashboard.store';
import { DashboardUsecase } from '../../applications/dashboard.usecase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardStore, DashboardUsecase],
})
export class DashboardComponent implements OnInit {
  constructor(private readonly _componentStore: DashboardStore, private readonly _usecase: DashboardUsecase) {}

  heroes$ = this._componentStore.heroes$.pipe(map((heroes) => (heroes === null ? null : heroes.slice(1, 5))));

  ngOnInit(): void {
    this._usecase.fetchHeroes();
  }
}
