import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DashboardUsecase } from '../../applications/dashboard.usecase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
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
