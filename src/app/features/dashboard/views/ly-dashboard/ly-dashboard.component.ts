import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ly-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ly-dashboard.component.html',
  styleUrls: ['./ly-dashboard.component.scss']
})
export class LyDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
