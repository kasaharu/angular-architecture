import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User, UserSummary } from '../domain/user';
import { selectStore, State } from './user.store';

@Injectable({
  providedIn: 'root',
})
export class UserQuery {
  constructor(private store$: Store<State>) {}

  readonly user$: Observable<User | null> = selectStore(this.store$, (state) => state.user);
  readonly usersSummary$: Observable<UserSummary[] | null> = selectStore(this.store$, (state) => {
    if (state.userList === null) {
      return state.userList;
    }

    return state.userList.map((user) => {
      const { id, name, email, website } = user;
      return { id, name, email, website };
    });
  });
}
