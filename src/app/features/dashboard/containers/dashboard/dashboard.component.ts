import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardStore } from './dashboard.store';
import { DashboardUsecase } from './dashboard.usecase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardStore, DashboardUsecase],
})
export class DashboardComponent implements OnInit {
  constructor(private readonly _componentStore: DashboardStore, private readonly _usecase: DashboardUsecase) {}

  heroes$ = this._componentStore.heroes$;

  ngOnInit(): void {
    this._usecase.fetchHeroes();
  }
}
