import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserListQuery } from '../../../../user-list/applications/user-list.query';
import { UserListUsecase } from '../../../../user-list/applications/user-list.usecase';
import { User } from '../../../../user-list/domain/user-list';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private query: UserListQuery, private usecase: UserListUsecase) {}
  readonly userList$: Observable<User[] | null> = this.query.userList$;

  ngOnInit() {
    this.usecase.initialize();
  }
}
