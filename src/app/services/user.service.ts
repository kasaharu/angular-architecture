import { Injectable } from '@angular/core';

import { UserRepository } from '../repositories/user.repository';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private userRepository: UserRepository) {}

  fetchUserList() {
    return this.userRepository.fetchUserList();
  }
}
