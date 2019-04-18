import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserService } from '../../services/user.service';
import { UserStoreActions, UserStoreState } from '../../store/root/user-store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList$: Observable<any>;
  constructor(private store$: Store<{}>, private userService: UserService) {}

  ngOnInit() {
    this.store$.dispatch(UserStoreActions.saveRequest());
    this.userList$ = this.store$.pipe(select(UserStoreState.selectUser));
  }
}
