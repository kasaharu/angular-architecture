import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { LyDashboardComponent } from '../../views/ly-dashboard/ly-dashboard.component';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LyDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService],
})
export class DashboardComponent implements OnInit {
  private readonly _service = inject(DashboardService);

  readonly $heroes = computed(() => this._service.$state().heroes);

  ngOnInit(): void {
    this._service.getHeroes();
  }
}
