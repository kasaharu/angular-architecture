import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailUsecase } from '../../usecases/detail.usecase';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private usecase: DetailUsecase) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.usecase.initialize(id);
    });
  }
}
