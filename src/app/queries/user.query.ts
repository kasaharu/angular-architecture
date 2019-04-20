import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { UserStoreState } from '../store/root/user-store';

@Injectable({
  providedIn: 'root',
})
export class UserQuery {
  constructor(private store$: Store<{}>) {}

  userList$ = this.store$.pipe(select(UserStoreState.selectUser));
}
