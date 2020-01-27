import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserRepository } from '../../../infrastructures/repositories/user.repository';
import { actions as userActions } from './user.store';

@Injectable({
  providedIn: 'root',
})
export class UserUsecase {
  constructor(private store$: Store<{}>, private userRepository: UserRepository) {}

  async initialize() {
    const result = await this.userRepository.fetchUser(1).toPromise();
    this.store$.dispatch(userActions.saveUser({ user: result }));
  }
}
