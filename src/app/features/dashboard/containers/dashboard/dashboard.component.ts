import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { LyDashboardComponent } from '../../views/ly-dashboard/ly-dashboard.component';
import { DashboardService } from './dashboard.service';
import { DashboardStore } from './dashboard.store';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LyDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardStore, DashboardService],
})
export class DashboardComponent implements OnInit {
  private readonly _componentStore = inject(DashboardStore);
  private readonly _service = inject(DashboardService);

  heroes$ = this._componentStore.heroes$;

  ngOnInit(): void {
    this._service.getHeroes();
  }
}
