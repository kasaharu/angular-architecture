import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../domain/user';
import { selectStore, State } from './user.store';

@Injectable({
  providedIn: 'root',
})
export class UserQuery {
  constructor(private store$: Store<State>) {}

  readonly user$: Observable<User | null> = selectStore(this.store$, (state) => state.user);
}
