import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserRepository } from '../repositories/user.repository';
import { UserStoreActions } from '../store/root/user-store';

@Injectable({
  providedIn: 'root',
})
export class DetailUsecase {
  constructor(private store$: Store<{}>, private userRepository: UserRepository) {}

  async initialize(userId: number) {
    const user = await this.userRepository.fetchUser(userId).toPromise();
    this.store$.dispatch(UserStoreActions.saveSelectedUser(user));
  }
}
