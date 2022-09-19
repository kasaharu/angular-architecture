import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
