import { Component, OnInit } from '@angular/core';

import { UserUsecase } from '../../usecases/user.usecase';
import { UserQuery } from '../../queries/user.query';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList$ = this.userQuery.userList$;

  constructor(private userUsecase: UserUsecase, private userQuery: UserQuery) {}

  ngOnInit() {
    this.userUsecase.initialize();
  }
}
