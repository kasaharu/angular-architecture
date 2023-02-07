import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { LyDashboardComponent } from '../../views/ly-dashboard/ly-dashboard.component';
import { DashboardStore } from './dashboard.store';

@Component({
  standalone: true,
  imports: [AsyncPipe, LyDashboardComponent],
  templateUrl: './dashboard.component.html',
  providers: [DashboardStore],
})
export class DashboardPageComponent implements OnInit {
  private readonly _componentStore = inject(DashboardStore);
  heroes$ = this._componentStore.heroes$;

  ngOnInit(): void {
    this._componentStore.getHeroes();
  }
}
