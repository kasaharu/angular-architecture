import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { useFirstValue } from '../../../utilities/observable';
import { UserRepository } from '../infrastructures/repositories/user.repository';
import { actions as userActions, selectStore } from './user.store';

@Injectable({
  providedIn: 'root',
})
export class UserUsecase {
  constructor(private store$: Store<{}>, private userRepository: UserRepository) {}

  async initializeDetail(id: number) {
    const result = await this.userRepository.fetchUser(id).toPromise();
    this.store$.dispatch(userActions.saveUser({ user: result }));
  }

  async initializeSummary() {
    const storedData = await useFirstValue(selectStore(this.store$, (state) => state.userList));
    // NOTE: すでに userList が store にある場合は HTTP request しない
    if (storedData !== null) {
      return;
    }
    const result = await this.userRepository.fetchUserList().toPromise();
    this.store$.dispatch(userActions.saveUserList({ userList: result }));
  }
}
