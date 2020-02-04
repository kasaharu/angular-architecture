import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserQuery } from '../../../applications/user.query';
import { UserUsecase } from '../../../applications/user.usecase';
import { UserSummary } from '../../../domain/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './users-summary.component.html',
  styleUrls: ['./users-summary.component.scss'],
})
export class UsersSummaryComponent implements OnInit {
  constructor(private query: UserQuery, private usecase: UserUsecase) {}
  readonly usersSummary$: Observable<UserSummary[] | null> = this.query.usersSummary$;

  ngOnInit() {
    this.usecase.initializeSummary();
  }
}
