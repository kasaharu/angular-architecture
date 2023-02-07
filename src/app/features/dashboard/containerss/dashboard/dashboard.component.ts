import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { LyDashboardComponent } from '../../views/ly-dashboard/ly-dashboard.component';
import { DashboardStore } from './dashboard.store';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LyDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardStore],
})
export class DashboardComponent implements OnInit {
  private readonly _componentStore = inject(DashboardStore);
  heroes$ = this._componentStore.heroes$;

  ngOnInit(): void {
    this._componentStore.getHeroes();
  }
}
