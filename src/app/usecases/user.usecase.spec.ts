import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { UserRepository } from '../repositories/user.repository';
import { UserUsecase } from './user.usecase';

class MockUserRepository {
  fetchUserList() {}
}

describe('UserUsecase', () => {
  let usecase: UserUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: UserRepository, useClass: MockUserRepository },
        provideMockStore({
          initialState: {
            user: {
              userList: null,
            },
          },
        }),
      ],
    });

    usecase = TestBed.get(UserUsecase);
  });
  it('should create an instance', () => {
    expect(usecase).toBeTruthy();
  });
});
