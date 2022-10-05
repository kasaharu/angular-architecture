import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LyDashboardComponent } from '../../views/ly-dashboard/ly-dashboard.component';
import { DashboardStore } from './dashboard.store';

@Component({
  standalone: true,
  imports: [CommonModule, LyDashboardComponent],
  templateUrl: './dashboard.component.html',
  providers: [DashboardStore],
})
export class DashboardPageComponent implements OnInit {
  constructor(private readonly _componentStore: DashboardStore) {}
  heroes$ = this._componentStore.heroes$;

  ngOnInit(): void {
    this._componentStore.getHeroes();
  }
}
