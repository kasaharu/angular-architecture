import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { UserQuery } from './user.query';

describe('UserQuery', () => {
  let query: UserQuery;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            user: {
              userList: null,
            },
          },
        }),
      ],
    });

    query = TestBed.get(UserQuery);
  });

  it('should create an instance', () => {
    expect(query).toBeTruthy();
  });
});
