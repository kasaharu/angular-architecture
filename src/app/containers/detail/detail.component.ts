import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../../core/models';
import { UserQuery } from '../../queries/user.query';
import { DetailUsecase } from '../../usecases/detail.usecase';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private userQuery: UserQuery, private usecase: DetailUsecase) {}

  user$: Observable<User | null> = this.userQuery.selectedUser$;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) {
        return;
      }
      this.usecase.initialize(+id);
    });
  }
}
