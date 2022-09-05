import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ly-heroes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ly-heroes.component.html',
  styleUrls: ['./ly-heroes.component.scss'],
})
export class LyHeroesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
