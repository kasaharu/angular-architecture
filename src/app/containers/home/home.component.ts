import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../core/models';
import { UserQuery } from '../../queries/user.query';
import { UserUsecase } from '../../usecases/user.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private userQuery: UserQuery, private userUsecase: UserUsecase) {}
  userList$: Observable<User[] | null> = this.userQuery.userList$;

  ngOnInit() {
    this.userUsecase.initialize();
  }
}
