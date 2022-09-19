import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../../domain/hero';

@Component({
  selector: 'app-ly-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ly-hero-detail.component.html',
  styleUrls: ['./ly-hero-detail.component.scss'],
})
export class LyHeroDetailComponent implements OnInit {
  constructor() {}
  @Input() hero?: Hero;

  ngOnInit(): void {}
}
