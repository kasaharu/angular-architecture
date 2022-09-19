import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ly-hero-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ly-hero-detail.component.html',
  styleUrls: ['./ly-hero-detail.component.scss'],
})
export class LyHeroDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
