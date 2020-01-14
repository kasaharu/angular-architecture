import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../domain/user-list';
import { selectStore, State } from './user-list.store';

@Injectable({
  providedIn: 'root',
})
export class UserListQuery {
  constructor(private store$: Store<State>) {}

  readonly userList$: Observable<User[] | null> = selectStore(this.store$, (state) => state.userList);
}
