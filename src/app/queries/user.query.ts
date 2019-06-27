import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../core/models';
import { UserStoreState } from '../store/root/user-store';

@Injectable({
  providedIn: 'root',
})
export class UserQuery {
  constructor(private store$: Store<{}>) {}

  userList$: Observable<User[] | null> = this.store$.pipe(select(UserStoreState.selectUserList));
  selectedUser$: Observable<User | null> = this.store$.pipe(select(UserStoreState.selectSelectedUser));
}
