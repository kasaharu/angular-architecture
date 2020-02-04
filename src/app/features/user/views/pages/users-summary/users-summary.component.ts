import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserQuery } from '../../../applications/user.query';
import { UserUsecase } from '../../../applications/user.usecase';
import { User } from '../../../domain/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './users-summary.component.html',
  styleUrls: ['./users-summary.component.scss'],
})
export class UsersSummaryComponent implements OnInit {
  constructor(private query: UserQuery, private usecase: UserUsecase) {}
  readonly userList$: Observable<User[] | null> = this.query.userList$;

  ngOnInit() {
    this.usecase.initializeSummary();
  }
}
