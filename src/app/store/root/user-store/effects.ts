import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

import * as UserStoreActions from './actions';
import { UserService } from '../../../services/user.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions<UserStoreActions.ActionsUnion>, private userService: UserService) {}

  @Effect()
  fetchUser$: Observable<Action> = this.actions$.pipe(
    ofType('[User] save request'),
    concatMap(() => this.userService.fetchUserList().pipe(map((userList) => UserStoreActions.saveSuccess(userList)))),
  );
}
