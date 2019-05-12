import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../core/models';
import { UserQuery } from '../../queries/user.query';
import { UserUsecase } from '../../usecases/user.usecase';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList$: Observable<User[]> = this.userQuery.userList$;

  constructor(private userUsecase: UserUsecase, private userQuery: UserQuery) {}

  ngOnInit() {
    this.userUsecase.initialize();
  }
}
