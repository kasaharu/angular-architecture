import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserRepository } from '../../../infrastructures/repositories/user.repository';
import { actions as userActions } from './user-list.store';

@Injectable({
  providedIn: 'root',
})
export class UserListUsecase {
  constructor(private store$: Store<{}>, private userRepository: UserRepository) {}

  async initialize() {
    const result = await this.userRepository.fetchUserList().toPromise();
    this.store$.dispatch(userActions.saveUserList({ userList: result }));
  }
}
