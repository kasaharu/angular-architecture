import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserRepository } from '../repositories/user.repository';
import { UserStoreActions } from '../store/root/user-store';

@Injectable({
  providedIn: 'root',
})
export class UserUsecase {
  constructor(private store$: Store<{}>, private userRepository: UserRepository) {}

  async initialize() {
    const result = await this.userRepository.fetchUserList().toPromise();
    this.store$.dispatch(UserStoreActions.saveSuccess(result));
  }
}
