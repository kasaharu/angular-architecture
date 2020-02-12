import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { useFirstValue } from '../../../utilities/observable';
import { User } from '../domain/user';
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

  async updateUser(user: User) {
    // NOTE: 対象の user の更新処理
    const updatedUser = await this.userRepository.updateUser(user.id, user).toPromise();

    // NOTE: users の取得
    let users: User[] | null = null;
    users = await useFirstValue(selectStore(this.store$, (state) => state.userList));
    if (users === null) {
      users = await this.userRepository.fetchUserList().toPromise();
    }

    // NOTE: users の更新
    const updatedUsers = users.map((item) => {
      return item.id === updatedUser.id ? updatedUser : item;
    });
    this.store$.dispatch(userActions.saveUserList({ userList: updatedUsers }));
  }
}
